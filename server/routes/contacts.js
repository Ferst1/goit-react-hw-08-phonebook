

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find({ owner: req.user._id });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    number: req.body.number,
    owner: req.user._id, // Устанавливаем владельца контакта
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findOne({ _id: req.params.id, owner: req.user._id });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    await contact.deleteOne();
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
