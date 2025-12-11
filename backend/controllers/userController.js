const jwt = require('jsonwebtoken');
const { users } = require('../data/mockData');

// 注册
const register = (req, res) => {
  const { email, password } = req.body;
  
  // 检查用户是否已存在
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // 创建新用户
  const newUser = {
    id: users.length + 1,
    email,
    password,
    displayName: email.split('@')[0],
    channels: ['cnn', 'bbc']
  };
  
  users.push(newUser);
  
  res.status(201).json(newUser);
};

// 登录
const login = (req, res) => {
  const { email, password } = req.body;
  //打印
  console.log(email, password);
  
  // 查找用户
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // 生成JWT令牌
  const token = jwt.sign(
    { email: user.email, userId: user.id },
    'your-secret-key',
    { expiresIn: '1h' }
  );
  
  res.status(200).json({
    access_token: token,
    display_name: user.displayName,
    channels: user.channels
  });
};

// 获取用户资料
const profile = (req, res) => {
  const { email } = req.userData;
  
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.status(200).json({
    display_name: user.displayName,
    channels: user.channels
  });
};

// 登出
const logout = (req, res) => {
  // 在实际应用中，这里可能需要处理令牌失效逻辑
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
  register,
  login,
  profile,
  logout
};