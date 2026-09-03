/**
 * 塔罗牌占卜网站（独立项目）
 * 1. 静态服务 public/ 下的页面与 JS
 * 2. 代理 /api/tarot/ai 调用千问生成塔罗解读（API Key 仅存服务端）
 */
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');

const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, 'public');

// ── 轻量加载 .env（不依赖 dotenv，已有环境变量优先）──
(function loadEnvFile() {
  const envPath = path.join(ROOT, '.env');
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, 'utf8');
  raw.split(/\r?\n/).forEach((line) => {
    const t = line.trim();
    if (!t || t.startsWith('#')) return;
    const m = t.match(/^([\w.]+)\s*=\s*(.*)\s*$/);
    if (!m) return;
    const key = m[1];
    const val = m[2].replace(/^["']|["']$/g, '').trim();
    if (process.env[key] === undefined) process.env[key] = val;
  });
})();

const PORT = Number(process.env.PORT) || 3000;

// 千问 Token Plan 团队版 API Key（从 .env 读取，敏感信息勿硬编码、勿提交）
const QIANWEN_API_KEY = process.env.QIANWEN_API_KEY || '';

// 千问团队版支持的文本生成模型
const MODEL = 'qwen3.8-max';
const SYSTEM_PROMPT = '你是一位温和而资深的塔罗牌解读师，擅长结合牌面象征与用户的具体处境，给出富有启发性的解读。请用中文作答，语气自然、克制、有温度。回答务必简短精炼，全文控制在 200~300 字以内，直接给出最有价值的启发，避免长篇铺陈和重复。不预测命运、不给出医疗/法律/投资等专业结论，遇到相关问题时引导用户理性看待。';

// ── MIME 类型 ──
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// ── 静态文件服务（防路径穿越）──
function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.resolve(PUBLIC_DIR, '.' + urlPath);
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    const contentType = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache, no-store, must-revalidate' });
    res.end(data);
  });
}

// ── 读取 JSON 请求体 ──
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) { reject(new Error('请求体过大')); req.destroy(); }
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); }
      catch (e) { reject(new Error('请求体不是合法 JSON')); }
    });
    req.on('error', reject);
  });
}

// ── 千问底层调用 ──
function callQianwen(postData, apiKey) {
  return new Promise((resolve, reject) => {
    let data = '';
    let done = false;

    const req = https.request({
      hostname: 'token-plan.cn-beijing.maas.aliyuncs.com',
      path: '/compatible-mode/v1/chat/completions',
      method: 'POST',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (done) return;
        done = true;
        try {
          const json = JSON.parse(data);
          if (res.statusCode !== 200) {
            reject(new Error(json.error?.message || `千问 返回 ${res.statusCode}`));
            return;
          }
          resolve(json);
        } catch (e) {
          reject(new Error('AI 响应解析失败'));
        }
      });
      res.on('error', (err) => { if (!done) { done = true; reject(new Error(`响应流错误: ${err.message}`)); } });
    });

    req.on('timeout', () => { if (!done) { done = true; req.destroy(); reject(new Error('请求超时 (30s)，请稍后重试')); } });
    req.on('error', (err) => { if (!done) { done = true; reject(new Error(`网络请求失败: ${err.message}`)); } });

    req.write(postData);
    req.end();
  });
}

// ── 调用千问生成塔罗解读文案 ──
// userKey：访客在页面右上角自行配置的 Key（优先使用，消耗访客自己的额度）
function runTarotAI(prompt, userKey) {
  const apiKey = (userKey && String(userKey).trim()) || QIANWEN_API_KEY;
  if (!apiKey) {
    throw new Error('未配置 API Key：请点击页面右上角「🔑 AI 配置」填入你的千问 API Key');
  }
  if (!prompt || !String(prompt).trim()) {
    throw new Error('缺少占卜内容');
  }

  const postData = JSON.stringify({
    model: MODEL,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: String(prompt) }
    ],
    max_tokens: 600,
    temperature: 0.7
  });

  return callQianwen(postData, apiKey).then((json) => {
    const content = json.choices?.[0]?.message?.content;
    if (!content || !String(content).trim()) throw new Error('AI 返回了空内容');
    return String(content).trim();
  });
}

// ── 校验 Key 有效性（最小化调用，几乎不消耗额度）──
function validateKey(apiKey) {
  const postData = JSON.stringify({
    model: MODEL,
    messages: [{ role: 'user', content: 'hi' }],
    max_tokens: 1
  });
  return callQianwen(postData, apiKey);
}

// ── HTTP 服务器 ──
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API: 塔罗 AI 解读（前端不暴露 Key）
  if (req.method === 'POST' && req.url.split('?')[0] === '/api/tarot/ai') {
    try {
      const { prompt, apiKey } = await parseBody(req);
      const content = await runTarotAI(prompt, apiKey);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, content }));
    } catch (err) {
      console.error(`[塔罗AI] 错误: ${err.message}`);
      const status = /未配置 API Key/.test(err.message) ? 503 : 500;
      res.writeHead(status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // API: 校验访客 Key 是否有效（前端校验通过才允许保存）
  if (req.method === 'POST' && req.url.split('?')[0] === '/api/tarot/validate-key') {
    try {
      const { apiKey } = await parseBody(req);
      if (!apiKey || !String(apiKey).trim()) throw new Error('请先填写 API Key');
      await validateKey(String(apiKey).trim());
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // 静态文件
  if (req.method === 'GET') {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405);
  res.end('Method Not Allowed');
});

server.listen(PORT, () => {
  console.log(`🃏 塔罗牌占卜网站已启动`);
  console.log(`   本地访问: http://localhost:${PORT}`);
  console.log(`   AI 解读: ${QIANWEN_API_KEY ? '已配置 ✔' : '未配置 ✘（请在 .env 中设置 QIANWEN_API_KEY）'}`);
});