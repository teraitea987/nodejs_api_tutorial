const EmployeeModel = require('../models/employee.model');

// GET ALL EMPLOYEES LIST
exports.getEmployeesList = (req, res)=> {
	console.log('here all employees list');
	EmployeeModel.getAllEmployees((err, employees) =>{
		console.log('We are here');
		if(err)
		res.send(err);
		console.log('Employees', employees);
		res.send(employees);
	})
}