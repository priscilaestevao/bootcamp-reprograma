const employees = require('../models/funcionarios.json');
const fs = require('fs');

const getAllEmployees = (req, res) => {
    res.status(200).send(employees);
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(employees.find((employee) => employee.id == id));
};

const getEmployeeList = (req, res) => {
    const employeesList = employees.map((namesList) => namesList.nome);
    res.status(200).send(employeesList);
};

const postEmployee = (req, res) => {
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

deleteEmployee = (req, res) => {
    const id = req.params.id;
    const filteredEmployee = employees.find((foundEmployee) => foundEmployee.id == id);
    const index = employees.indexOf(filteredEmployee);
    employees.splice(index, 1);

    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(employees), 'utf8', err => {
        if(err) {
            return res.status(424).send({ message: err });
        };
        console.log('Arquivo deletado com sucesso!');
    });
    res.status(201).send(employees);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    postEmployee,
    deleteEmployee,
    getEmployeeList
};