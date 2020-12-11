const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Nova requisição realizada')
    next();
});
module.exports = app;

