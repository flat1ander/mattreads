# mattreads
## A dynamic book database
This app is desiged to allow the user to log books they have read. The index page is a large mural of books covers. Clicking a cover brings you to a show page with addiitonal information on the book as well as a rating from 1 to 5 stars.

## Wireframes
INDEX PAGE:
![alt text](https://i.imgur.com/aVYVyow.png)

SHOW PAGE:
![alt text](https://i.imgur.com/dfsdUKI.png)

## User Stories
- As a user, I will be able to view a database of books that I have already logged and read.
- As a user, I will be able to create a new book which posts it to the index.
- As a user, I will be able to update the data of previously logged books.
- As a user, I will be able to delete a book that I no longer wish to track.

## MVP
- Create a working app that has an index route that houses all of the data on one page.
- Build a form that allows you to create a new entry to the database.
- Have the ability to update previoulsy logged books.
- Have the ability to delete previously logged books.
- Additional styling to make the app look nice.

## Stretch Goals
- Implement a filter tool that allows books to be sorted in various ways.
- Add a 5 stars graphic for rating books.

## Code Snippit
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
