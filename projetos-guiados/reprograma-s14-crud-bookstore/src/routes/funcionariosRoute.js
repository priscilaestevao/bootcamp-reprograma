const express = require("express");
const router = express.Router();
const controller = require("../controller/funcionariosController");

router.get("/", controller.allEmployees);
router.get("/:id", controller.employeeById);
router.post("/", controller.registerEmployee);
router.delete("/:id", controller.deleteEmployee);
router.put("/:id", controller.updateEmployee);

module.exports = router;
