const collaborators = require("../models/colaboradoras");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

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

const login = (req, res) => {
  collaborators.findOne({ email: req.body.email }, (err, collaborator) => {
    if (!collaborator) {
      return res
        .status(404)
        .send(`No collaborator registered with email ${req.body.email}.`);
    }
    const validPassword = bcrypt.compareSync(
      req.body.senha,
      collaborator.senha
    );
    if (!validPassword) {
      return res.status(403).send("Invalid password!");
    }
    const token = jwt.sign({ email: req.body.email.email }, SECRET);
    return res.status(200).send(token);
  });
};

module.exports = {
  getAllCollaborators,
  createCollaborator,
  login
};
