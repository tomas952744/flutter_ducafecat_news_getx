const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization failed' });
    }
    
    const decoded = jwt.verify(token, 'your-secret-key'); // 实际项目中应使用环境变量
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authorization failed' });
  }
};

module.exports = auth;