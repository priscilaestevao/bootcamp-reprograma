const collaborators = require("../models/colaboradoras");
const bcrypt = require("bcrypt");

const getAllCollaborators = (req, res) => {
  collaborators.find((err, collaborators) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(200).send(collaborators);
  });
};

const createCollaborator = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = hashedPassword;
  const collaborator = new collaborators(req.body);

  collaborator.save((err) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(201).send(collaborator.toJSON());
  });
};

module.exports = {
  getAllCollaborators,
  createCollaborator
};
