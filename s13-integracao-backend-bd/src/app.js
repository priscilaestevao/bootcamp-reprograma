const express = require("express");
const app = express();

const index = require("./routes/index");
const clients = require("./routes/clients");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/clientes", clients);

module.exports = app;
