const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.post('/', controller.postBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;