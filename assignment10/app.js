// import packages we need to run the express app
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.get('/', (req,res) => {res.send('testin')});

// adding a body parser to handle JSON for us automagically
app.use(express.json());

// our in-memory fake data store is just an array of javascript objects
// we declare it here so that both endpoints can use it
var books = [
  { "author": "me", "title": "BookA", "pages": 600, "quality": "new" },
  { "author": "you", "title": "BookB", "pages": 400, "quality": "used" },
  { "author": "us", "title": "BookC", "pages": 500, "quality": "old" },
];

// request handler to search based on title
app.get('/book', function (req, res) {
    // get the query params
    var title = req.query.title;
    // initialize the return data
    var data;
    // search for the book
    for (var i = 0; i < books.length; i++) {
        if (books[i].title == title) {
            data = books[i];
            break;
        }
    }
    // pass JSON back to client
    res.set('Content-type', 'application/json');
    res.status(201);    // POST success response code
    res.send({"book": data});
});

app.get('/books', function (req, res) {
    
    let allBooks = [];
    for(let i =0; i<books.length; i++){
        allBooks.push(books[i]);
    }
    // pass JSON back to client
    res.set('Content-type', 'application/json');
    res.status(200);    // POST success response code
    res.send({"books": allBooks});
});

app.delete('/book', function (req, res) {
    // get the query params
    var title = req.query.title;
    // search for the book
    for (var i = 0; i < books.length; i++) {
        if (books[i].title == title) {
            books.splice(i, 1);
            break;
        }
    }
    res.status(204);    // POST success response code
    res.send(books);
});

// post handler to add a book to the hardcoded list
// this is definitely not the correct model for storing data
// this is simply an example 
app.post('/book', function (req, res) {
    // access the request POST body from the request object
    var data = req.body;
   
    // add the new book to the data store and return it
    var book = {
      "author": data.author,
      "title": data.title,
      "pages": data.pages,
      "quality": data.quality,
    }
   
    // add the book to the hardcoded list of books
    books.push(book)
    
    // return JSON list of books
    res.set('Content-type', 'application/json');
    res.status(200);     // GET success response code
    res.send({"books": books});
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});