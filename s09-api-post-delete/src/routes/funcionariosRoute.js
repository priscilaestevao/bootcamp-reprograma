const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionariosController');

router.get('/funcionarios', controller.getAllEmployees);
router.get('/funcionarios/:id', controller.getEmployeeById);

module.exports = router;