const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradorasController")

router.get("/", controller.getAllCollaborators);
router.post("/", controller.createCollaborator);
router.post("/login", controller.login);

module.exports = router;