const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAllTasks);
router.get("/:id", controller.taskById);
router.post("/", controller.createTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;