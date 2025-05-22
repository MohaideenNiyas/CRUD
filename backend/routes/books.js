const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// CREATE a new book
// CREATE a new book with auto-incremented custom id
router.post('/', async (req, res) => {
  try {
    // Get the book with the highest custom `id`
    const lastBook = await Book.findOne().sort({ id: -1 }).limit(1);

    // Determine new id
    const newId = lastBook ? parseInt(lastBook.id) + 1 : 1;

    // Create a new book with the computed id
    const book = new Book({ ...req.body, id: newId });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ single book by custom id
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    if (!book) return res.status(404).json({ error: 'Not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a book by custom id
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a book by custom id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Book.findOneAndDelete({ id: req.params.id });
    if (!result) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
