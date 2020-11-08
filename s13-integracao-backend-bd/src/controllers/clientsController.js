const clients = require("../models/clients");

const getAllClients = (req, res) => {
  clients.find((err, clients) => {
    if (err) {
      res.status(424).send({ message: err.message });
    }
    res.status(200).send(clients);
  });
};

const buyersClients = (req, res) => {};

const clientByCPF = (req, res) => {};

const newClient = (req, res) => {
  let client = new clients(req.body);
  client.save((err) => {
    if (err) {
      res.status(424).send({ message: err.message });
    }
    res.status(201).send({
      status: true,
      menssage: "Client successfully included!",
    });
  });
};

module.exports = {
  getAllClients,
  buyersClients,
  clientByCPF,
  newClient,
};
