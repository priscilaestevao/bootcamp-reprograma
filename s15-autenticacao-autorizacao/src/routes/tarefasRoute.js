const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAllTasks);
router.post("/", controller.createTask);

module.exports = router;