const express = require("express");
const app = express();
const index = require("./routes/index");
const games = require("./routes/gamesRoute");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/games", games);

module.exports = app;
