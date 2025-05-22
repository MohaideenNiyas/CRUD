const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
  id:Number
});

module.exports = mongoose.model('bookdatabase', bookSchema);
