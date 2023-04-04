const { mongoose } = require('../db/connection');

const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    rating: Number,
    synopsis: String,
})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books;