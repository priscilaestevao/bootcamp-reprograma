const employees = require('../models/funcionarios.json');
const fs = require('fs');

const getAllEmployees = (req, res) => {
    res.status(200).send(employees);
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(employees.find((employee) => employee.id == id));
};

const postEmployeed = (req, res) => {
    const { id, nome, sobrenome, dataNasc, admissao, funcao } = req.body;
    employees.push({ id, nome, sobrenome, dataNasc, admissao, funcao });

    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(employees), 'utf8', err => {
        if(err) {
            return res.status(424).send({ menssage: err });
        }
        console.log('Arquivo atualizado com sucesso!');
    });
    res.status(202).send(employees);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    postEmployeed
};