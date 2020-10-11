const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionariosController');

router.get('/', controller.getAllEmployees);
router.get('/:id', controller.getEmployeeById);
router.post('/', controller.postEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;