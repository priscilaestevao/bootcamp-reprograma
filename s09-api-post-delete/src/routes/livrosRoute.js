const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.post('/', controller.postBook);

module.exports = router;