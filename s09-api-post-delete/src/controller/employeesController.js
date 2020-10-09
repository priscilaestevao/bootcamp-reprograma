const employees = require('../models/employees.json');

const getAllEmployees = (req, res) => {
    console.log(req, url);
    res.status(200).send(employees);
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(employees.find((nome) => nome.id == id))
};

module.exports = {
    getAllEmployees,
    getEmployeeById
};