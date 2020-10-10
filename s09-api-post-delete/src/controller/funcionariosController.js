const employees = require('../models/funcionarios.json');

const getAllEmployees = (req, res) => {
    res.status(200).send(employees);
};

const getEmployeeById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(employees.find((employee) => employee.id == id))
};

module.exports = {
    getAllEmployees,
    getEmployeeById
};