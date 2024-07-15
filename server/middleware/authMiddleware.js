const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }
    req.user = user;
    next();
  } catch (ex) {
    res.status(401).send({ error: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
