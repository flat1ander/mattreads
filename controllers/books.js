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
router.post ('/', async (req, res) => {
    res.send('book post route')
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
    res.send('book delete route')
})

// Update
router.put('/:id', async (req, res) => {
    res.send('book update route')
})

module.exports = router;