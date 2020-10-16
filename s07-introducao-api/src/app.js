const express = require('express');
const app = express();

const index = require('./routes/index');
livros-server
const livrosNegros = require('./routes/livrosNegrosRoute')

const orixas = require('./routes/orixasRoute')
main

app.use((req, res, next) => {
    console.log('Nova requisição realizada');
    next();
});

app.use('/', index);
livros-server
app.use('/livros-negros', livrosNegros);

app.use('/orixas', orixas);
main

module.exports = app;