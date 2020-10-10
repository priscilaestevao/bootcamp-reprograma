const express = require('express');
const app = express();

const index = require('./routes/index');
const books = require('./routes/livrosRoute')
const employees = require('./routes/funcionariosRoute');

app.use(express.json());

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/', index);
app.use('/livros', books);
app.use('/funcionarios', employees);

module.exports = app;