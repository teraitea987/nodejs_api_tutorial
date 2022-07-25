const EmployeeModel = require('../models/employee.model');

// get employees list
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

// get employee by ID
exports.getEmployeeById = (req, res) => {
	console.log('here all employees list');
	EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
		console.log('We are here brother');
		if(err)
		res.send(err);
		console.log('Employee', employee);
		res.send(employee);
	})

}