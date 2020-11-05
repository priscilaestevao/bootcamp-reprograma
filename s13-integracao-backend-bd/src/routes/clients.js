const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");

router.get("/", controller.getAllClients);

module.exports = router;
