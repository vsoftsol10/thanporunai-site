const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create Contact
router.post('/', async (req, res) => {
  try {
    const { name, number, message } = req.body;

    if (!name || !number || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const saved = await Contact.create({ name, number, message });

    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get All Contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete Contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
