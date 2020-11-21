const mongoose = require("mongoose");
const collaboratorsSchema = new mongoose.Schema(
  {
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false
  }
);

const collaborators = mongoose.model("collaborators", collaboratorsSchema);

module.exports = collaborators;
