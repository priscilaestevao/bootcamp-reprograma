const livrosNegros = require('../models/livros-negros.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(livrosNegros);
};
module.exports = {getAll};