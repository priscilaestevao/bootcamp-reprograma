const orixas = require('../models/orixas-ketu.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(orixas);
};
module.exports = {getAll};