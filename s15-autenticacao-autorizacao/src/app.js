require("dotenv-safe").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "Connection error!"));
db.once("open", () => {
  console.log("Sucessfully connected to database!");
});

const index = require("./routes/index");
const colaborators = require("./routes/colaboradorasRoute");
const tasks = require("./routes/tarefasRoute");

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
app.use("/colaboradoras", colaborators);
app.use("/tarefas", tasks);

module.exports = app
