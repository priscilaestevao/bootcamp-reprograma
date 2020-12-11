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
      return res.status(403).send("Invalid token!");
    }
    tasks.find((err, tasks) => {
      if (err) {
        return res.status(424).send({ message: err });
      }
      res.status(200).send(tasks);
    });
  });
};

const taskById = (req, res) => {
  const id = req.params.id;
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    tasks.find({ id }, (err, task) => {
      if (!task.length) {
        return res.status(404).send("Task not found!");
      } else if (err) {
        return res.status(424).send({ message: err });
      }
      res.status(200).send(task);
    });
  });
};

const createTask = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
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

const deleteTask = (req, res) => {
  const id = req.params.id;
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    tasks.find({ id }, (err, task) => {
      if (!task.length) {
        return res.status(404).send("Task not found!");
      } else {
        tasks.deleteOne({ id }, (err) => {
          if (err) {
            return res.status(424).send({ message: err });
          }
          res.status(200).send("Tasks successfully deleted!");
        });
      }
    });
  });
};

const deleteCompletedTask = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Invalid token!");
    }
    tasks.deleteMany({ concluido: true }, (err) => {
      if (err) {
        return res.status(424).send({ message: err });
      }
      res.status(200).send("Tasks successfully deleted!");
    });
  });
};

module.exports = {
  getAllTasks,
  taskById,
  createTask,
  deleteTask,
  deleteCompletedTask,
};
