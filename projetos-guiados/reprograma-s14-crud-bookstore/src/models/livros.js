const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
  {
    id: { type: Number },
    titulo: { type: String },
    autora: { type: String },
    genero: { type: String },
    estoque: { type: Boolean },
    editora: { type: String },
  },
  {
    versionKey: false,
  }
);

const books = mongoose.model("collectionBooks", booksSchema);

module.exports = books;
