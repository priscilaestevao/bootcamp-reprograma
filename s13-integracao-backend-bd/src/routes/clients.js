const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");

router.get("/", controller.getAllClients);
router.get("/compradores", controller.buyersClients);
router.get("/:cpf", controller.clientByCPF);
router.post("/", controller.newClient);

module.exports = router;
