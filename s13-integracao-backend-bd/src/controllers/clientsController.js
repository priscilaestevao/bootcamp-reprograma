const clients = require("../models/clients");

const getAllClients = (req, res) => {
  clients.find((err, clients) => {
    if (err) {
      res.status(424).send({ message: err.message });
    }
    res.status(200).send(clients);
  });
};

const buyersClients = (req, res) => {
  clients.find({ comprou: true }, {nome: 1, email: 1, _id: 0}, (err, clients) => {
    if (err) {
      res.status(424).send({ message: err.message });
    }
    res.status(200).send(clients);
  })
};

const clientByCPF = (req, res) => {
  const cpf = req.params.cpf
  clients.find({ cpf }, (err, client) => {
    if (err) {
      res.status(424).send({ message: err.message })
    } else if (client.length > 0) {
      res.status(200).send(client)
    }
    res.status(404).send({ message: "Client not found!" })
  })
};

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
