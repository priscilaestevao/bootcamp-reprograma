const express = require('express');
const app = express();

const index = require('./routes/index');
const orixas = require('./routes/orixasRoute')

app.use((req, res, next) => {
    console.log('Nova requisição realizada');
    next();
});

app.use('/', index);
app.use('/orixas', orixas);

module.exports = app;