const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema(
  {
    nº: { type: Number },
    descricao: { type: String },
    dataInclusao: { type: String },
    concluido: { type: Boolean },
    nomeColaboradora: { type: String },
  },
  {
    versionKey: false
  }
);

const tasks = mongoose.model("tasks", tasksSchema);

module.exports = tasks;
