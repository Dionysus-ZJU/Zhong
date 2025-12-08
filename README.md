# 任务管理系统

基于 Vercel + GitHub API 的任务管理系统，支持数据共享和同步。

## 功能特点

- ✅ 管理员登录验证（账号密码存储在 Vercel 环境变量）
- ✅ GitHub 数据同步（所有修改自动保存到 GitHub）
- ✅ 事项管理（添加、编辑、删除）
- ✅ 状态分类（进行中、未开始、已截止）
- ✅ Excel 导入/导出
- ✅ 响应式设计

## 部署步骤

### 1. 准备 GitHub 仓库

1. 在 GitHub 创建一个仓库（公开或私有）
2. 生成 Personal Access Token：
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token (classic)
   - 勾选 `repo` 权限
   - 复制生成的 Token

### 2. 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量：

在 Vercel 项目设置中添加以下环境变量：

```
ADMIN_USERNAME=zjdx
ADMIN_PASSWORD=zjdx
GITHUB_OWNER=your-github-username
GITHUB_REPO=your-repo-name
GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
GITHUB_PATH=data.json
```

### 3. 文件结构

```
.
├── api/
│   ├── config.js      # 获取 GitHub 配置
│   ├── auth.js        # 管理员登录验证
│   └── github.js      # GitHub 数据操作
├── styles.css         # 样式文件
├── app.js            # 前端逻辑
├── index.html        # 主页面
├── vercel.json       # Vercel 配置
└── README.md         # 说明文档
```

## 使用说明

1. **登录**：使用管理员账号密码登录（账号密码从 Vercel 环境变量读取）
2. **添加事项**：登录后点击"添加事项"按钮
3. **编辑/删除**：登录后可以编辑或删除事项
4. **数据同步**：所有修改会自动同步到 GitHub 仓库

## 环境变量说明

- `ADMIN_USERNAME`: 管理员账号
- `ADMIN_PASSWORD`: 管理员密码
- `GITHUB_OWNER`: GitHub 用户名或组织名
- `GITHUB_REPO`: 仓库名称
- `GITHUB_TOKEN`: GitHub Personal Access Token
- `GITHUB_PATH`: 数据文件路径（默认：data.json）

## 注意事项

- 账号密码和 GitHub Token 都存储在 Vercel 环境变量中，不会出现在代码中
- 所有数据修改都会自动同步到 GitHub
- 首次访问会自动从 GitHub 加载数据
- 如果 GitHub 上还没有数据文件，会使用本地数据

