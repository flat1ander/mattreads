const express = require('express')
const app = express();
const PORT = 3000
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const morgan = require('morgan'); 
require('dotenv').config()

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // May need to adjust this back to how it was before (just 'public' inside parens)
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(morgan("tiny")) 

app.get('/', (req, res) => {
    res.send('default route')
})

const booksController = require('./controllers/books')
app.use('/books', booksController)







// Listener
app.listen(PORT, () => {
    console.log('express is listening on port 3000')
})

