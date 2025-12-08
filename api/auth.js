// Vercel Serverless Function - 验证管理员账号密码
module.exports = async (req, res) => {
  // 设置 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // 从环境变量获取账号密码
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || '';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

  // 验证账号密码
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // 生成一个简单的 session token（实际项目中应该使用更安全的方式）
    const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    
    return res.status(200).json({
      success: true,
      message: '登录成功',
      token: sessionToken
    });
  } else {
    return res.status(401).json({
      success: false,
      message: '账号或密码错误'
    });
  }
}

