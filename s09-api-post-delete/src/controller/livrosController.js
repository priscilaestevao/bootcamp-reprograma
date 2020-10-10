const books = require('../models/livros.json');

const getAllBooks = (req, res) => {
    console.log(req.url);
    res.status(200).send(books);
};

const getBookById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(books.find((book) => book.id == id))
};

module.exports = {
    getAllBooks,
    getBookById
};