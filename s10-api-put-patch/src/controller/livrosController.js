const books = require("../models/livros.json");
const fs = require("fs");

const getAllBooks = (req, res) => {
  res.status(200).send(books);
};

const getBookById = (req, res) => {
  const id = req.params.id;
  res.status(200).send(books.find((book) => book.id == id));
};

const getBooksStock = (req, res) => {
  const booksStock = books.filter(
    (booksAvaiable) => booksAvaiable.estoque == true
  );
  res.status(200).send(booksStock);
};

const postBook = (req, res) => {
  const id = books[books.length - 1].id + 1;
  const book = req.body;
  const newBook = {
    id,
    ...book,
  };
  books.push(newBook);

  fs.writeFile(
    "./src/models/livros.json",
    JSON.stringify(books),
    "utf8",
    (err) => {
      if (err) {
        return res.status(424).send({
          message: err,
        });
      }
      console.log("Arquivo atualizado com sucesso!");
    }
  );
  res.status(201).send(books);
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  const filteredBook = books.find((foundBook) => foundBook.id == id);
  const index = books.indexOf(filteredBook);
  books.splice(index, 1);

  fs.writeFile(
    "./src/models/livros.json",
    JSON.stringify(books),
    "utf8",
    (err) => {
      if (err) {
        return res.status(424).send({
          message: err,
        });
      }
      console.log("Arquivo deletado com sucesso!");
    }
  );
  res.status(201).send(books);
};

const putBook = (req, res) => {
  const id = req.params.id;
  const bookUpdate = req.body;

  try {
    const bookToUpdate = books.find((bookFound) => bookFound.id == id);
    const index = books.indexOf(bookToUpdate);
    books.splice(index, 1, bookUpdate);

    fs.writeFile(
      "./src/models/livros.json",
      JSON.stringify(books),
      "utf8",
      (err) => {
        if (err) {
          return res.status(424).send({
            message: err,
          });
        }
        console.log("Arquivo atualizado com sucesso!");
      }
    );
    res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({
      message: err,
    });
  }
};

const patchBook = (req, res) => {
  const id = req.params.id;
  const bookUpdate = req.body;

  try {
    const bookToUpdate = books.find((bookFound) => bookFound.id == id);
    Object.keys(bookUpdate).forEach((key) => {
      bookToUpdate[key] = bookUpdate[key];
    });
    return res.status(200).send(books);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  getBooksStock,
  postBook,
  deleteBook,
  putBook,
  patchBook,
};
