const mongoose = require("mongoose");
const employeesSchema = new mongoose.Schema(
  {
    id: { type: Number },
    nome: { type: String },
    sobrenome: { type: String },
    dataNasc: { type: String },
    dataAdmissao: { type: String },
    funcao: { type: String },
  },
  {
    versionKey: false,
  }
);

const employees = mongoose.model("collectionEmployees", employeesSchema);

module.exports = employees;
