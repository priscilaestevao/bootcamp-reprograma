const express = require('express');
const router = express.Router();
const controller = require('../controller/employeesController');

router.get('/', controller.getAllEmployees);
router.get('/:id', controller.getEmployeeById);

module.exports = router;