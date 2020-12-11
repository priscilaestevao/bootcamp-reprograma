const employees = require("../models/funcionarios.js");

const allEmployees = (req, res) => {
  employees.find((err, employees) => {
    if (err) {
      return res.status(424).send({ message: err });
    }
    res.status(200).send(employees);
  });
};

const employeeById = (req, res) => {
  const id = req.params.id;
  employees.find(
    { id },
    { nome: 1, sobrenome: 1, funcao: 1, _id: 0 },
    (err, employee) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (employee.length > 0) {
        return res.status(200).send(employee);
      }
      res.status(404).send({ message: "Employee not found." });
    }
  );
};

const registerEmployee = (req, res) => {
  employees.countDocuments((err, count) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else {
      let employee = new employees(req.body);
      employee.id = count + 1;
      employee.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          status: true,
          message: "Employee successfully included!",
        });
      });
    }
  });
};

const deleteEmployee = (req, res) => {
  const id = req.params.id;
  employees.deleteMany({ id }, (err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send({ message: "Employee deleted successfully!" });
  });
};

const updateEmployee = (req, res) => {
  const id = req.params.id;
  employees.updateMany({ id }, { $set: req.body }, { upsert: true }, (err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send({ message: "Employee updated successfully!" });
  });
};

module.exports = {
  allEmployees,
  employeeById,
  registerEmployee,
  deleteEmployee,
  updateEmployee,
};
