// const jwt = require('jsonwebtoken');
// const express = require('express');
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const router = express.Router();
// require('dotenv').config();  // Для загрузки переменных окружения из файла .env

// const secret = process.env.JWT_SECRET; // Чтение секрета из .env

// // Middleware для проверки токена
// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).send({ error: 'Access denied. No token provided.' });
//   }
//   try {
//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).send({ error: 'Invalid token.' });
//   }
// };

// router.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).send({ error: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ error: 'Email is already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: '1h' });

//     res.status(201).send({ user: { name: newUser.name, email: newUser.email }, token });
//   } catch (error) {
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).send({ error: 'Email and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ error: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send({ error: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });

//     res.send({ user: { name: user.name, email: user.email }, token });
//   } catch (error) {
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// // Пример защищенного маршрута
// router.get('/protected', authMiddleware, async (req, res) => {
//   res.send({ message: 'This is a protected route', user: req.user });
// });

// module.exports = router;




const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: 'Email is already in use' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: '1h' });

    res.status(201).send({ token, user: { name: newUser.name, email: newUser.email } });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).send(error);
    }
    res.status(500).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });

    res.send({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/logout', authMiddleware, async (req, res) => {
  // Выход пользователя, удаление токена на клиенте
  res.send({ message: 'Logged out successfully' });
});

router.get('/current', authMiddleware, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
