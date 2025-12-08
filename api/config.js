// Vercel Serverless Function - 获取配置信息
module.exports = async (req, res) => {
  // 设置 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 只允许 GET 请求
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 从环境变量获取配置
  const config = {
    githubOwner: process.env.GITHUB_OWNER || '',
    githubRepo: process.env.GITHUB_REPO || '',
    githubToken: process.env.GITHUB_TOKEN || '',
    githubPath: process.env.GITHUB_PATH || 'data.json',
    // 注意：账号密码不应该通过 API 返回，应该在服务端验证
    // 这里只返回 GitHub 配置
  };

  // 返回配置（不包含敏感信息）
  res.status(200).json({
    githubOwner: config.githubOwner,
    githubRepo: config.githubRepo,
    githubPath: config.githubPath,
    // 不返回 token，token 只在服务端使用
  });
}

