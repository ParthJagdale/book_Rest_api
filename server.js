// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

app.use(express.json());

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    books = books.filter(book => book.id !== parseInt(req.params.id));
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/`);
});
