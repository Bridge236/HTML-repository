# GitHub Pages 部署指南

> 适用仓库：`Bridge236/HTML-repository`  
> GitHub Pages 地址：`https://bridge236.github.io/HTML-repository/`  
> 最后更新：2026-06-04

---

## 一、首次配置（新电脑只需做一次）

### 1. 生成 SSH 密钥

打开终端（Git Bash / PowerShell），执行：

```bash
ssh-keygen -t ed25519 -C "1697872887@qq.com" -f ~/.ssh/id_ed25519 -N ""
```

### 2. 复制公钥

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出的全部内容（以 `ssh-ed25519` 开头）。

### 3. 添加到 GitHub

1. 打开 https://github.com/settings/keys
2. 点击 **New SSH Key**
3. Title 随便填（如 `家里电脑`、`公司电脑`）
4. Key 粘贴刚才复制的公钥
5. 点击 **Add SSH Key**

### 4. 测试连接

```bash
ssh -T git@github.com
```

看到 `Hi Bridge236! You've successfully authenticated` 就说明成功了。

---

## 二、克隆仓库（已有项目）

```bash
git clone git@github.com:Bridge236/HTML-repository.git
cd HTML-repository
```

---

## 三、新增项目并部署

假设你要部署一个新项目 `my-project/`，结构如下：

```
my-project/
├── index.html
├── style.css
└── script.js
```

### 操作步骤

```bash
# 1. 确保在仓库根目录
cd HTML-repository

# 2. 确保代码是最新的
git pull origin main

# 3. 把项目文件夹复制到仓库中
#    （手动复制，或命令行复制）
cp -r /path/to/my-project ./my-project

# 4. 添加并提交
git add my-project/
git commit -m "添加 my-project 项目"

# 5. 推送到 GitHub
git push -u origin main
```

### 等待 1-2 分钟后，访问：

```
https://bridge236.github.io/HTML-repository/my-project/
```

---

## 四、更新已有项目

修改了代码后：

```bash
cd HTML-repository

# 拉取最新代码（防止冲突）
git pull origin main

# 添加修改
git add -A

# 提交
git commit -m "更新 my-project 内容"

# 推送
git push
```

---

## 五、一键三连（日常最常用）

```bash
cd HTML-repository && git pull origin main && git add -A && git commit -m "日常更新" && git push
```

---

## 六、GitHub Pages 设置（仓库只需设一次）

1. 打开 https://github.com/Bridge236/HTML-repository/settings/pages
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `main`，目录选 `/ (root)`
4. 点击 **Save**

设置后，仓库里的所有文件夹都可以通过 URL 直接访问。

---

## 七、关键信息速查

| 项目 | 值 |
|------|-----|
| 仓库 SSH 地址 | `git@github.com:Bridge236/HTML-repository.git` |
| GitHub 用户名 | `Bridge236` |
| 仓库名 | `HTML-repository` |
| Pages 根地址 | `https://bridge236.github.io/HTML-repository/` |
| 分支 | `main` |
| 绑定邮箱 | `1697872887@qq.com` |

---

## 八、常见问题

### Q: push 报错 `Permission denied (publickey)`
→ 说明 SSH 密钥没配好，重做 **第一步**。

### Q: push 报错 `rejected, non-fast-forward`
→ 远程有别人的更新，先 `git pull origin main` 再 push。

### Q: 网页 404
→ 确认文件已 push 到 main 分支，等 1-2 分钟再刷新。检查 GitHub Pages 设置中 Branch 是否选对了。

### Q: 换电脑了，旧密钥还能用吗？
→ 每台电脑的 SSH 密钥是独立的。新电脑需要重新生成并添加到 GitHub（第一步）。
