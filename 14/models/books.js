const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { 
    type: String,
    unique: true },
  writtenBy: String,
  inside: String,
  holderTime: Number,
  holderBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' },
  deletedAt: Date,
  deletedBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' },
  createdAt: { 
    type: Date,
    default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;