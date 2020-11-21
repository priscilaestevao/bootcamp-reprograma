const mongoose = require("mongoose");
const colaboratorsSchema = new mongoose.Schema(
  {
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false
  }
);

const colaborators = mongoose.model("colaborators", colaboratorsSchema);

module.exports = colaborators;
