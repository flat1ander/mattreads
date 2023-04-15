const express = require('express');
const router = express.Router();
const starterBooks = require('../db/bookSeedData')
const Books = require('../models/books.js')

// Index
router.get('/', async (req, res) => {
    const books = await Books.find({});
    res.render('index.ejs', {books})
})

// Create
router.get ('/new', async (req, res) => {
    res.render('new.ejs')
})

// Post
router.post('/', async (req, res) => {
    const books = await Books.create(req.body);
    res.redirect('/books')
})

// Seed
router.get ('/seed', async (req, res) => {
    await Books.deleteMany({});
    await Books.create(starterBooks);
    res.redirect('/books');
})

// Show
router.get('/:id', async (req, res) => {
    const books = await Books.findById(req.params.id)
    res.render('show.ejs', {books})
})

// Delete 
router.delete('/:id', async (req, res) => {
    const books = await Books.findByIdAndDelete(req.params.id);
    res.redirect('/books')
})

// Edit and Update Routes:
router.get('/:id/edit', async (req, res) => {
    const books = await Books.findById(req.params.id)
    res.render('edit.ejs', {books})
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const books = await Books.findByIdAndUpdate(id, req.body, {new: true,})
    res.redirect('/books')
})

module.exports = router;