const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);