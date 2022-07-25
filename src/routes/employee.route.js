const { Router } = require('express');
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/', employeeController.getEmployeesList);

// get employee by ID
router.get('/:id', employeeController.getEmployeeById);

module.exports = router;