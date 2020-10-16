const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const index = require('./routes/index');
const books = require('./routes/livrosRoute')
const employees = require('./routes/funcionariosRoute');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept'
  );
  next();
});

app.use('/', index);
app.use('/livros', books);
app.use('/funcionarios', employees);

module.exports = app;