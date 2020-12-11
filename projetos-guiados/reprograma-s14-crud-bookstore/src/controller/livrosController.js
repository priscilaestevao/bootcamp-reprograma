const books = require("../models/livros.js");

const allBooks = (req, res) => {
  books.find((err, books) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(200).send(books);
  });
};

const bookById = (req, res) => {
  const id = req.params.id;
  books.find({ id }, { titulo: 1, autora: 1, _id: 0 }, (err, book) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (book.length > 0) {
      return res.status(200).send(book);
    }
    res.status(404).send({ message: "Book not found." });
  });
};

const registerBook = (req, res) => {
  books.countDocuments((err, count) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else {
      let book = new books(req.body);
      book.id = count + 1;
      book.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          status: true,
          message: "Book saved successfully!",
        });
      });
    }
  });
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  books.deleteMany({ id }, (err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send({ message: "Book deleted successfully!" });
  });
};

const updateBook = (req, res) => {
  const id = req.params.id;
  books.updateMany({ id }, { $set: req.body }, { upsert: true }, (err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send({ message: "Book updated successfully!" });
  });
};

module.exports = {
  allBooks,
  bookById,
  registerBook,
  deleteBook,
  updateBook,
};
