const clients = require("../models/clients");

const getAllClients = (req, res) => {
  res.status(200).send(clients);
};

module.exports = { getAllClients };
