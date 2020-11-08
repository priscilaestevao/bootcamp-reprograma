const mongoose = require("mongoose");
const clientsSchema = new mongoose.Schema(
  {
    nome: { type: String },
    email: { type: String },
    cpf: { type: String },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean },
  },
  {
    versionKey: false,
  }
);

const clients = mongoose.model("clients", clientsSchema);

module.exports = clients;
