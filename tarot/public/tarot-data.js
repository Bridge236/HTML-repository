// ============================================================
//  TAROT DATA — 78-card database  (Major + Minor Arcana)
// ============================================================

const MAJOR_ARCANA = [
  {
    id: 0, name: "愚者", en: "The Fool", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    keywords: ["新开始","天真","冒险","信任"],
    upright: "全新的出发点，怀揣无畏的心踏入未知。天真不是软弱，而是不带成见地迎接一切可能。",
    reversed: "鲁莽冲动，或因过度恐惧而裹足不前。此刻需要回归初心，但也要稍加审慎。",
    scene: "感情初期的悸动；全新项目的第一步；放下包袱重新出发",
    soul: "人生所有旅程都从一步开始。那一步不需要完美，只需要迈出去。"
  },
  {
    id: 1, name: "魔术师", en: "The Magician", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    keywords: ["显化","创造","掌控","行动"],
    upright: "你拥有完成目标所需的一切工具。是时候把意图转化为行动，将想法落地成现实。",
    reversed: "能量分散，或在操控他人/被人操控。检查自己是否在消耗而非创造。",
    scene: "创业、谈判、展示自我；让才能被看见的时机",
    soul: "宇宙只赋予你工具，使用它们是你的责任。"
  },
  {
    id: 2, name: "女祭司", en: "The High Priestess", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    keywords: ["直觉","秘密","内在智慧","等待"],
    upright: "答案就在你内心深处。此刻不是行动的时候，而是倾听直觉的时候。有些事情尚未浮出水面。",
    reversed: "压抑直觉，或信息被刻意隐藏。过度理性分析反而让你迷失。",
    scene: "做决定前需要更多信息；感情中有尚未说出的真相",
    soul: "最深的智慧往往是沉默的。"
  },
  {
    id: 3, name: "女皇", en: "The Empress", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    keywords: ["丰盛","滋养","创造力","自然"],
    upright: "一段丰盛富足的时期。创造力旺盛，适合孕育新事物——无论是项目、关系还是新生命。",
    reversed: "过度依赖他人，或自我滋养不足。需要重新关照自己的内在需求。",
    scene: "婚恋关系的深化；创作项目的成熟；物质生活的充裕",
    soul: "先把自己照顾好，才有能量滋养世界。"
  },
  {
    id: 4, name: "皇帝", en: "The Emperor", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    keywords: ["权威","秩序","结构","稳定"],
    upright: "需要建立清晰的边界和结构。用理性和规则为生活或事业打下稳固基础。",
    reversed: "过于强硬，或权威缺失。要么在控制欲中迷失，要么对规则的抵触让事情停滞。",
    scene: "职场中建立权威；家庭关系中设立边界；长期规划的落地",
    soul: "真正的力量不在于控制别人，而在于掌控自己。"
  },
  {
    id: 5, name: "教皇", en: "The Hierophant", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    keywords: ["传统","指引","信仰","学习"],
    upright: "传统智慧与既有体系中有你需要的答案。寻求导师或向有经验的人请教。",
    reversed: "对传统的束缚感，或需要打破固有模式找到自己的路。",
    scene: "拜师学艺；遵守规则的重要时机；婚姻与仪式",
    soul: "先学会规则，才有资格打破它。"
  },
  {
    id: 6, name: "恋人", en: "The Lovers", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg",
    keywords: ["选择","结合","价值观","关系"],
    upright: "面临一个重要的抉择，关乎价值观和真实的自我。在感情中代表深度的连接与契合。",
    reversed: "关系中的不协调，或在逃避一个必须做出的选择。",
    scene: "重大感情决策；两难选择；找到志同道合的伙伴",
    soul: "每一个真诚的选择，都是一次自我表达。"
  },
  {
    id: 7, name: "战车", en: "The Chariot", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    keywords: ["决心","意志力","突破","胜利"],
    upright: "用意志力和专注力突破阻碍。胜利在望，但需要保持方向感和自我控制。",
    reversed: "方向感丧失，或用蛮力却适得其反。需要重新找到内心的平衡点。",
    scene: "竞争、考试、目标冲刺；克服内外阻力的时刻",
    soul: "不是最快的人赢，是方向最准的人赢。"
  },
  {
    id: 8, name: "力量", en: "Strength", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    keywords: ["内在力量","耐心","勇气","以柔克刚"],
    upright: "真正的力量来自内心的温柔与耐心，而非蛮力。你有能力驯服内心的野性力量。",
    reversed: "自我怀疑侵蚀了力量，或压抑了自己的本能与热情。",
    scene: "面对恐惧或愤怒时；在压力下保持优雅；治愈内心的创伤",
    soul: "最勇敢的事，是温柔地面对自己的脆弱。"
  },
  {
    id: 9, name: "隐者", en: "The Hermit", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    keywords: ["内省","独处","真理","指引"],
    upright: "是时候向内寻找答案了。远离喧嚣，在独处中找到自己真正的方向。也可能是寻求或成为一位导师。",
    reversed: "过度孤立或拒绝帮助。独处变成了逃避，而非成长。",
    scene: "人生转折期的反思；需要深度休整；排除外界干扰做决定",
    soul: "在寂静中，你才能听见自己真正的声音。"
  },
  {
    id: 10, name: "命运之轮", en: "Wheel of Fortune", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    keywords: ["命运","转折","周期","机遇"],
    upright: "命运的轮子正在转动，带来积极的变化。顺势而为，接受生命的流动与节奏。",
    reversed: "逆境中的坚持，或抗拒必然的变化。命运在转，但可以选择如何应对。",
    scene: "人生重大转机；运势上升期；接受无法控制的因素",
    soul: "轮子一直在转。你不能停住它，但可以决定怎么站在上面。"
  },
  {
    id: 11, name: "正义", en: "Justice", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    keywords: ["公平","因果","真相","责任"],
    upright: "公正的结果即将到来。诚实面对自己的行为，承担应有的责任，因果法则会给出公平的答案。",
    reversed: "不公正感，或在逃避责任。需要正视某件事的真相。",
    scene: "法律纠纷；做需要客观判断的决定；审视自己行为的因果",
    soul: "你种下什么，就会收获什么——早或晚。"
  },
  {
    id: 12, name: "倒吊人", en: "The Hanged Man", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    keywords: ["臣服","新视角","等待","牺牲"],
    upright: "主动暂停，换一个角度看问题。某些事需要放手，或以牺牲换取更深的理解。",
    reversed: "拖延的代价开始显现，或拒绝放手已经阻碍了成长。",
    scene: "陷入僵局时；需要改变惯性思维；在等待中学习",
    soul: "有时候，停下来是最有力量的行动。"
  },
  {
    id: 13, name: "死神", en: "Death", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    keywords: ["转化","结束","重生","蜕变"],
    upright: "一个阶段正在结束，为全新的开始腾出空间。这不是失去，而是蜕变的必经过程。",
    reversed: "抗拒改变，紧抓已经结束的事物不放。转化在发生，但进程因抵触而变得痛苦。",
    scene: "关系或工作阶段的终结；旧有模式的瓦解；深刻的人生蜕变",
    soul: "每一次结束，都是另一种形式的开始。"
  },
  {
    id: 14, name: "节制", en: "Temperance", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    keywords: ["平衡","调和","耐心","中庸"],
    upright: "在两个极端之间找到和谐的中间道路。耐心与节制是此刻最有力量的武器。",
    reversed: "过激或失衡的状态。要么走极端，要么在关键时刻缺乏节制。",
    scene: "调解矛盾；恢复内外平衡；长期项目的稳步推进",
    soul: "真正的和谐不是消除差异，而是让差异共存。"
  },
  {
    id: 15, name: "恶魔", en: "The Devil", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    keywords: ["束缚","执念","阴影","物欲"],
    upright: "你正受到某种执念、成瘾或有害关系的束缚。意识到这条链子，是打破它的第一步。",
    reversed: "开始挣脱束缚，或直面自己的阴暗面。解放在路上，但需要勇气。",
    scene: "识别和打破有害习惯；审视不健康的关系模式；面对内心的恐惧",
    soul: "你以为在笼子里，但笼门从来没有锁上。"
  },
  {
    id: 16, name: "塔", en: "The Tower", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    keywords: ["剧变","崩塌","揭示","重建"],
    upright: "突如其来的震荡打破了旧有秩序。这场崩塌虽痛苦，却是清除虚假结构的必要过程。",
    reversed: "内在的动荡被压抑着，或在避免一场本该发生的崩塌。延迟只会让震动更大。",
    scene: "突发变故；旧关系或旧信念的瓦解；从灾难中找到重建的基础",
    soul: "真正稳固的东西，经得起任何风暴。"
  },
  {
    id: 17, name: "星星", en: "The Star", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    keywords: ["希望","疗愈","更新","信念"],
    upright: "在经历黑暗之后，重新相信未来的可能。疗愈的能量正在流入，允许自己慢慢恢复。",
    reversed: "信心低落，或悲观的情绪让你看不到希望。但星星还在，只是乌云暂时遮住了它。",
    scene: "低谷后的恢复期；重拾梦想的时刻；身心的疗愈与更新",
    soul: "光不会消失，它只是在等你重新看见它。"
  },
  {
    id: 18, name: "月亮", en: "The Moon", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    keywords: ["幻象","恐惧","潜意识","不确定"],
    upright: "事情不像表面看起来那样清晰。潜意识的恐惧和幻象在影响你的判断。此刻需要穿透迷雾。",
    reversed: "混乱逐渐消散，真相开始浮现。压抑的情绪需要被照见和整合。",
    scene: "感情中的不安全感；信息不明朗时的决策；探索内心深处的恐惧",
    soul: "月亮照不出真相，但它会让你看清楚你在害怕什么。"
  },
  {
    id: 19, name: "太阳", en: "The Sun", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    keywords: ["喜悦","成功","光明","生命力"],
    upright: "充满活力和喜悦的时期。事情进展顺利，内心感到真实的满足和幸福。",
    reversed: "喜悦被压抑，或对成功过于执着而失去了当下的快乐。",
    scene: "庆祝成就；感情的美好阶段；身心状态极佳的时期",
    soul: "喜悦不需要理由。它本来就在那里，等你允许它进来。"
  },
  {
    id: 20, name: "审判", en: "Judgement", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    keywords: ["觉醒","召唤","重生","反思"],
    upright: "一次深刻的内在召唤。是时候清算过去、原谅自己，带着全新的认知重新出发。",
    reversed: "拒绝反思，或无法从过去中解脱。旧的审判仍在折磨着你。",
    scene: "人生重大决断；原谅自己或他人；接受命运的召唤转变方向",
    soul: "真正的觉醒不是改变世界，而是改变你看世界的方式。"
  },
  {
    id: 21, name: "世界", en: "The World", suit: "major",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    keywords: ["完成","圆满","成就","整合"],
    upright: "一个完整周期的圆满结束。你整合了所有经历，带着丰盛和完整感踏入下一个循环。",
    reversed: "离圆满只差最后一步，却卡在某个未完成的事项上。完成它。",
    scene: "项目的成功完结；人生阶段的圆满；整合经历、准备迎接新周期",
    soul: "终点与起点，只隔着一次深呼吸。"
  }
];

// ── Minor Arcana (sampler — 宫廷牌 + Ace for each suit) ──────────────────
const MINOR_ARCANA = [
  // WANDS
  { id:22, name:"权杖王牌", en:"Ace of Wands", suit:"wands",
    img:"https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    keywords:["突破","新项目","激情","创意火花"],
    upright:"一股强劲的创造能量涌现。新项目、新热情或新机会的种子正在萌发。",
    reversed:"创意受阻或能量难以落地。想法很多，但执行力不足。",
    scene:"创业初期；灵感突现；新计划的点火时刻",
    soul:"每一个伟大的事业，都始于一个无法忽视的冲动。" },
  { id:23, name:"权杖国王", en:"King of Wands", suit:"wands",
    img:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
    keywords:["领导力","远见","魄力","企业家精神"],
    upright:"以远见和魄力引领方向。你的热情具有感染力，是推动集体前进的力量。",
    reversed:"冲动的领导风格，或控制欲过强。需要倾听而非只是号令。",
    scene:"领导项目；创业决策；点燃团队士气",
    soul:"真正的领袖，是用愿景感召人，而非用权力驱使人。" },

  // CUPS
  { id:24, name:"圣杯王牌", en:"Ace of Cups", suit:"cups",
    img:"https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    keywords:["新感情","情感开放","直觉","爱的流动"],
    upright:"情感的新篇章开始。心扉敞开，爱、喜悦和创造力都在涌流。",
    reversed:"情感麻木或防御心理过强。允许自己重新感受。",
    scene:"新恋情的萌芽；情感疗愈；重燃对生活的热爱",
    soul:"爱，是一种选择，也是一种能力。" },
  { id:25, name:"圣杯皇后", en:"Queen of Cups", suit:"cups",
    img:"https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
    keywords:["直觉","共情","情感智慧","滋养"],
    upright:"用情感智慧和共情力量去理解自己和他人。直觉此刻特别准确，相信它。",
    reversed:"情绪化或过度在意他人感受而忽略自己。需要为自己设立情感边界。",
    scene:"倾听自己的情感需求；支持他人度过困境；做需要情商的决策",
    soul:"最深的理解，不用语言，用心。" },

  // SWORDS
  { id:26, name:"宝剑王牌", en:"Ace of Swords", suit:"swords",
    img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    keywords:["清晰","真相","突破性认知","决断"],
    upright:"一瞬间的清明。一个重要的真相被揭示，或你的思路突然变得无比清晰。",
    reversed:"思维混乱或沟通失误。慎防误解与信息不准确。",
    scene:"做重大决定前；识破谎言或幻象；需要清晰沟通的场合",
    soul:"一把锋利的剑，可以斩断迷雾，也可以割伤自己——关键在于谁握着它。" },
  { id:27, name:"宝剑骑士", en:"Knight of Swords", suit:"swords",
    img:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
    keywords:["行动","直接","锋芒毕露","急速推进"],
    upright:"以强劲的推进力直冲目标。思维敏锐，行动果断，但要避免冲动带来的破坏。",
    reversed:"鲁莽或言辞伤人。速度不是力量，方向才是。",
    scene:"快速推进项目；直接表达立场；切断拖延",
    soul:"快，但不要快到忘记为什么出发。" },

  // PENTACLES
  { id:28, name:"星币王牌", en:"Ace of Pentacles", suit:"pentacles",
    img:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    keywords:["物质机遇","新收入","稳固基础","落地"],
    upright:"一个有关财富、健康或物质稳定的新机会正在到来。踏实行动，把它变成现实。",
    reversed:"错失机会，或因贪婪/谨慎过度而裹步不前。",
    scene:"新工作/投资机会的评估；为长期目标打基础；关注身体健康",
    soul:"机会不会等你想清楚。但准备好的人，能让每个机会物尽其用。" },
  { id:29, name:"星币十", en:"Ten of Pentacles", suit:"pentacles",
    img:"https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg",
    keywords:["家族繁荣","长远稳定","传承","圆满"],
    upright:"物质层面的圆满。家庭稳定、财富积累和传承，代表一段稳固而持久的成就。",
    reversed:"家庭关系中的矛盾，或对物质稳定的过度执着。",
    scene:"家庭决策；财务规划；思考长远的人生布局",
    soul:"真正的财富，是那些你离开之后，仍会留下来的东西。" }
];

const ALL_CARDS = [...MAJOR_ARCANA, ...MINOR_ARCANA];

// ── Spreads ─────────────────────────────────────────────────
const SPREADS = {
  ppf: {
    name: "过去·现在·未来",
    desc: "最经典的三张牌阵，清晰呈现事件的来龙去脉与走向。",
    positions: ["过去", "现在", "未来"]
  },
  yot: {
    name: "你·对方·关系",
    desc: "专为感情与关系设计，分别透视双方状态及关系走势。",
    positions: ["你的状态", "对方状态", "关系走势"]
  },
  spv: {
    name: "现状·障碍·建议",
    desc: "聚焦当下困局，找出阻力，给出行动方向。",
    positions: ["当前状态", "主要障碍", "应对建议"]
  },
  celtic: {
    name: "凯尔特十字",
    desc: "最完整的十张牌阵，全方位解析一个问题的所有维度。",
    positions: [
      "核心现状", "交叉影响",
      "潜意识根基", "近期过去",
      "可能的未来", "即将显化",
      "你的态度", "外部环境",
      "希望与恐惧", "最终结果"
    ]
  }
};

// ── Daily card (same card all day based on date hash) ────────
function getDailyCard() {
  const d = new Date();
  const seed = d.getFullYear() * 10000 + (d.getMonth()+1) * 100 + d.getDate();
  const idx = seed % MAJOR_ARCANA.length;
  return MAJOR_ARCANA[idx];
}

// ── Random draw helper ────────────────────────────────────────
function drawCards(n, pool = ALL_CARDS) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n).map(card => ({
    ...card,
    reversed: Math.random() > 0.5
  }));
}

// ── 访客自配 Key（仅存本地浏览器 localStorage） ──────────────
const KEY_STORAGE = 'qianwen_api_key';
function getUserKey() {
  try { return (localStorage.getItem(KEY_STORAGE) || '').trim(); } catch (e) { return ''; }
}
function setUserKey(v) {
  try { v ? localStorage.setItem(KEY_STORAGE, v) : localStorage.removeItem(KEY_STORAGE); } catch (e) {}
}

// ── AI reading helper（后端代理，前端不持有/不暴露 Key） ─────
async function callAI(prompt) {
  const res = await fetch('/api/tarot/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, apiKey: getUserKey() })
  });
  let data = null;
  try { data = await res.json(); } catch (e) {}
  if (!res.ok || !data || data.success === false) {
    throw new Error((data && data.error) || `AI 服务错误（${res.status}）`);
  }
  if (!data.content) throw new Error('AI 返回了空内容');
  return data.content;
}

// ── Markdown renderer ─────────────────────────────────────────
function inlineMarkdown(s) {
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

function renderMarkdown(md) {
  let html = String(md == null ? '' : md);
  // escape
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // normalize line endings
  html = html.replace(/\r\n?/g, '\n');

  const lines = html.split('\n');
  const out = [];
  let listType = null; // 'ul' | 'ol'

  const closeList = () => {
    if (listType) { out.push('</' + listType + '>'); listType = null; }
  };

  const isHeading = /^(#{1,3})\s+(.+)$/;
  const isHr = /^\s*[-*_]{3,}\s*$/;
  const isUl = /^\s*[-*+]\s+(.+)$/;
  const isOl = /^\s*\d+[.)]\s+(.+)$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (isHr.test(line)) { closeList(); out.push('<hr class="ai-hr">'); continue; }

    const h = line.match(isHeading);
    if (h) {
      closeList();
      const level = h[1].length;
      out.push(`<h${level} class="ai-h${level}">${inlineMarkdown(h[2])}</h${level}>`);
      continue;
    }

    const ul = line.match(isUl);
    if (ul) {
      if (listType !== 'ul') { closeList(); out.push('<ul class="ai-ul">'); listType = 'ul'; }
      out.push('<li>' + inlineMarkdown(ul[1]) + '</li>');
      continue;
    }

    const ol = line.match(isOl);
    if (ol) {
      if (listType !== 'ol') { closeList(); out.push('<ol class="ai-ol">'); listType = 'ol'; }
      out.push('<li>' + inlineMarkdown(ol[1]) + '</li>');
      continue;
    }

    if (!line.trim()) { closeList(); continue; }

    // 普通段落：连续的非空行合并为一个段落，中间用 <br> 分隔
    closeList();
    const para = [line.trim()];
    while (i + 1 < lines.length && lines[i + 1].trim()
      && !isHr.test(lines[i + 1])
      && !isHeading.test(lines[i + 1])
      && !isUl.test(lines[i + 1])
      && !isOl.test(lines[i + 1])) {
      i++;
      para.push(lines[i].trim());
    }
    out.push('<p>' + inlineMarkdown(para.join('<br>')) + '</p>');
  }
  closeList();

  return out.join('\n');
}

// ── History helpers ───────────────────────────────────────────
const History = {
  list() {
    try { return JSON.parse(localStorage.getItem("tarot_history") || "[]"); }
    catch { return []; }
  },
  push(entry) {
    const h = this.list();
    h.unshift({ ...entry, ts: Date.now() });
    localStorage.setItem("tarot_history", JSON.stringify(h.slice(0, 5)));
  }
};

// ── Quote pool ────────────────────────────────────────────────
const QUOTES = [
  "牌不是命运的答案，而是你内心的回声。",
  "每一次翻牌，都是与自己的一次深谈。",
  "塔罗不预言未来，它照亮当下。",
  "真正的占卜，是让你看清你已经知道的事。",
  "牌面给方向，走路还是要靠你自己。",
  "在混沌中看见象征，在象征中找到方向。",
  "你在牌里看见什么，就是你心里藏着什么。"
];
function randomQuote() { return QUOTES[Math.floor(Math.random() * QUOTES.length)]; }

// ============================================================
//  AI reading styles — injected into all pages
// ============================================================
(function initAIReadingStyles() {
  if (document.getElementById('aiReadingStyles')) return;
  const style = document.createElement('style');
  style.id = 'aiReadingStyles';
  style.textContent = `
.ai-reading{font-size:15px;color:#c0c8b8;line-height:2.1}
.ai-reading h1,.ai-reading h2,.ai-reading h3{color:var(--gold);font-weight:700;margin:24px 0 12px;letter-spacing:0.5px;line-height:1.5}
.ai-reading h1{font-size:20px}.ai-reading h2{font-size:18px}.ai-reading h3{font-size:17px}
.ai-reading h1:first-child,.ai-reading h2:first-child,.ai-reading h3:first-child{margin-top:0}
.ai-reading p{margin:0 0 14px;text-indent:0}
.ai-reading strong{color:#e8d5a3;font-weight:600}
.ai-reading code{background:rgba(255,215,0,0.08);color:#e8d5a3;padding:2px 6px;border-radius:6px;font-size:0.9em}
.ai-reading ul.ai-ul,.ai-reading ol.ai-ol{margin:0 0 14px;padding-left:22px}
.ai-reading li{margin:0 0 8px;line-height:1.9}
.ai-reading li::marker{color:var(--gold)}
.ai-reading hr.ai-hr{border:none;border-top:1px dashed rgba(255,215,0,0.2);margin:20px 0 14px}
.ai-reading em,.ai-reading .disclaimer{color:#8a8f7a;font-size:13px;line-height:1.8;display:block;margin-top:4px}`;
  document.head.appendChild(style);
})();

// ============================================================
//  API Key 配置入口 — 所有页面右上角注入按钮 + 弹窗
// ============================================================
(function initKeySettings() {
  const style = document.createElement('style');
  style.textContent = `
.nav-btn.key-btn.has-key{border-color:var(--green);color:var(--green)}
.key-mask{position:fixed;inset:0;background:rgba(5,8,20,.72);backdrop-filter:blur(2px);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px}
.key-mask.hidden{display:none}
.key-modal{background:linear-gradient(160deg,#16213e,#0d1a30);border:1px solid rgba(255,215,0,.3);border-radius:18px;padding:26px;max-width:440px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.55)}
.key-modal h3{color:var(--gold);font-size:17px;letter-spacing:1px;margin-bottom:8px}
.key-modal .km-desc{font-size:12px;color:var(--muted);line-height:1.8;margin-bottom:14px}
.key-modal .km-desc strong{color:#e8d5a3}
.key-modal input{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,215,0,.25);border-radius:10px;padding:11px 12px;color:var(--text);font-size:13px;outline:none;font-family:inherit;transition:.2s}
.key-modal input:focus{border-color:var(--gold)}
.key-status{font-size:12px;margin-top:10px;color:var(--muted)}
.key-status.on{color:var(--green)}
.key-status.err{color:#ef4444}
.km-save:disabled{opacity:.5;cursor:not-allowed}
.km-btns{display:flex;gap:10px;margin-top:16px;justify-content:flex-end;flex-wrap:wrap}
.km-btns button{padding:8px 18px;border-radius:20px;font-size:13px;cursor:pointer;font-family:inherit;transition:.2s}
.km-save{border:none;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#1a1a2e;font-weight:700}
.km-clear{border:1px solid rgba(239,68,68,.4);background:transparent;color:#ef4444}
.km-cancel{border:1px solid rgba(255,215,0,.3);background:transparent;color:var(--gold)}`;
  document.head.appendChild(style);

  function mount() {
    const nav = document.querySelector('.nav-links');
    if (!nav || document.getElementById('keySettingsBtn')) return;

    const btn = document.createElement('button');
    btn.className = 'nav-btn key-btn';
    btn.id = 'keySettingsBtn';
    nav.appendChild(btn);

    const mask = document.createElement('div');
    mask.className = 'key-mask hidden';
    mask.innerHTML = `
      <div class="key-modal">
        <h3>🔑 配置千问 API Key</h3>
        <p class="km-desc">配置后，AI 解读将使用<strong>你自己的</strong> Key 与额度。Key 仅保存在本浏览器本地，不会被存入网站数据库；未配置时使用站长提供的共享 Key（如有）。</p>
        <input id="keyInput" type="password" placeholder="粘贴你的千问 API Key（sk-…）" autocomplete="off">
        <div class="key-status" id="keyStatus"></div>
        <div class="km-btns">
          <button class="km-clear" id="keyClear">清除</button>
          <button class="km-cancel" id="keyCancel">取消</button>
          <button class="km-save" id="keySave">保存</button>
        </div>
      </div>`;
    document.body.appendChild(mask);

    const input = mask.querySelector('#keyInput');
    const status = mask.querySelector('#keyStatus');

    function refreshBtn() {
      const on = !!getUserKey();
      btn.textContent = on ? '🔑 已配置 Key' : '🔑 AI 配置';
      btn.classList.toggle('has-key', on);
      btn.title = on ? '当前使用你自己配置的千问 API Key（仅存本浏览器）' : '配置你自己的千问 API Key，启用 AI 解读';
    }
    function setStatus(text, mode) {
      status.textContent = text;
      status.classList.toggle('on', mode === 'on');
      status.classList.toggle('err', mode === 'err');
    }
    function show() {
      input.value = getUserKey();
      const on = !!getUserKey();
      setStatus(on ? '✓ 当前使用你配置的 Key（仅存本浏览器）' : '· 未配置；若站长配置了共享 Key 则默认使用它', on ? 'on' : '');
      mask.classList.remove('hidden');
      input.focus();
    }

    btn.onclick = show;
    mask.addEventListener('click', (e) => { if (e.target === mask) mask.classList.add('hidden'); });
    mask.querySelector('#keyCancel').onclick = () => mask.classList.add('hidden');
    mask.querySelector('#keySave').onclick = async () => {
      const v = input.value.trim();
      if (!v) { setStatus('✘ 请先填写 API Key', 'err'); return; }
      const saveBtn = mask.querySelector('#keySave');
      saveBtn.disabled = true; saveBtn.textContent = '校验中…';
      setStatus('· 正在校验 Key 是否有效…', '');
      try {
        const res = await fetch('/api/tarot/validate-key', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ apiKey: v })
        });
        const data = await res.json().catch(() => null);
        if (data && data.success) {
          setUserKey(v);
          mask.classList.add('hidden');
          refreshBtn();
        } else {
          setStatus(`✘ 校验失败：${(data && data.error) || '未知错误'}。Key 未保存`, 'err');
        }
      } catch (e) {
        setStatus(`✘ 校验请求失败：${e.message}`, 'err');
      } finally {
        saveBtn.disabled = false; saveBtn.textContent = '保存';
      }
    };
    mask.querySelector('#keyClear').onclick = () => { setUserKey(''); show(); refreshBtn(); };
    refreshBtn();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
