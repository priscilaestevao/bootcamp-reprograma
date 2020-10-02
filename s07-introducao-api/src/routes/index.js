const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Livros de Autores Negros",
        data: "22/09/2020"
    });
});
module.exports = router;