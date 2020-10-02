const express = require('express');
const app = express();

const index = require('./routes/index');
const livrosNegros = require('./routes/livrosNegrosRoute')

app.use((req, res, next) => {
    console.log('Nova requisição realizada');
    next();
});

app.use('/', index);
app.use('/livros-negros', livrosNegros);

module.exports = app;