const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Orixás da Nação Ketu cultuados no Brasil",
        data: "22/09/2020"
    });
});
module.exports = router;