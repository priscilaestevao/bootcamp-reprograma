const tasks = require("../models/tarefas");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const auth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).send("Need to include headers.");
  }
  const token = authHeader.split(" ")[1];
  return token;
};

const getAllTasks = (req, res) => {
  const token = auth(req, res);
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

const createTask = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    let task = new tasks(req.body);
    task.save((err) => {
      if (err) {
        res.status(424).send({ message: err });
      }
      res.status(200).send(task.toJSON());
    });
  });
};

module.exports = {
  getAllTasks,
  createTask,
};
