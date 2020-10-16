const express = require('express');
const router = express.Router();
const controller = require('../controller/orixasController');

router.get('/', controller.getAll);
router.get('/orixas', controller.getAll);

module.exports = router;