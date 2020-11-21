const colaborators = require("../models/colaboradoras");

const getAllColaborators = (req, res) => {
  colaborators.find((err, colaborators) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(200).send(colaborators);
  });
};

module.exports = {
  getAllColaborators,
};
