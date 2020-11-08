const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dbClients", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Sucessfully connected!");
});

const index = require("./routes/index");
const clients = require("./routes/clientsRoute");

app.use(express.json());

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
