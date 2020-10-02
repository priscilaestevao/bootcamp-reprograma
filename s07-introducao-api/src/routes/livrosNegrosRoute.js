const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosNegrosController');

router.get('/', controller.getAll);
router.get('/livros-negros', controller.getAll);

module.exports = router;