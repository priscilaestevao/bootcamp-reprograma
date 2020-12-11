const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get('/', controller.allBooks);
router.get('/:id', controller.bookById);
router.post('/', controller.registerBook);
router.delete('/:id', controller.deleteBook);
router.put('/:id', controller.updateBook);

module.exports = router;