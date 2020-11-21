const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAllTasks);
router.get("/:id", controller.taskByNum);
router.post("/", controller.createTask);

module.exports = router;