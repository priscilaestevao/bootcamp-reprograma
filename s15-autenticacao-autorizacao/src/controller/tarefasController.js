const tasks = require("../models/tarefas");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const getAllTasks = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("Need to include headers.");
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send({ message: err });
    }
    tasks.find((err, tasks) => {
      if (err) {
        return res.status(424).send({ message: err });
      }
      res.status(200).send(tasks);
    });
  });
};

module.exports = {
  getAllTasks,
};
