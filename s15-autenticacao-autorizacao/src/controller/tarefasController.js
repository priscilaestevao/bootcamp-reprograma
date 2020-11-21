const tasks = require("../models/tarefas");

const getAllTasks = (req, res) => {
  tasks.find((err, tasks) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(200).send(tasks);
  });
};

module.exports = {
  getAllTasks,
};