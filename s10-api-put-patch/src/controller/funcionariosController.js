const employees = require("../models/funcionarios.json");
const fs = require("fs");

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

const getEmployeeAge = (req, res) => {
  const id = req.params.id;
  const filteredEmployee = employees.find((employee) => employee.id == id);
  const employeeName = filteredEmployee.nome;
  const employeeBirth = filteredEmployee.dataNasc.split('/'); //.split() transforma a string em uma array, substituindo o <;> pela vírgula da array.

  const employeeAge = parseInt(2020) - parseInt(employeeBirth[2]); //subtração do ano atual (2020) com o ano de nascimento do funcionário que está no índice 2.
  res.status(200).send({
    nome: employeeName, // alteração da propriedade requerida para nome e idade
    idade: employeeAge,
  });
};

const postEmployee = (req, res) => {
  const id = employees[employees.length - 1].id + 1;
  const employee = req.body;
  const newEmployee = { id, ...employee };
  employees.push(newEmployee);

  fs.writeFile(
    "./src/models/funcionarios.json",
    JSON.stringify(employees),
    "utf8",
    (err) => {
      if (err) {
        return res.status(424).send({ menssage: err });
      }
      console.log("Arquivo atualizado com sucesso!");
    }
  );
  res.status(202).send(employees);
};

deleteEmployee = (req, res) => {
  const id = req.params.id;
  const filteredEmployee = employees.find(
    (foundEmployee) => foundEmployee.id == id
  );
  const index = employees.indexOf(filteredEmployee);
  employees.splice(index, 1);

  fs.writeFile(
    "./src/models/funcionarios.json",
    JSON.stringify(employees),
    "utf8",
    (err) => {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo deletado com sucesso!");
    }
  );
  res.status(201).send(employees);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeeAge,
  postEmployee,
  deleteEmployee,
  getEmployeeList,
};
