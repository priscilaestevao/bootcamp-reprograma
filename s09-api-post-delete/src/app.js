const express = require('express');
const app = express();

const employees = require('./routes/employeesRoute');

app.use(express.json());

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/funcionarios', employees);

module.exports = app;