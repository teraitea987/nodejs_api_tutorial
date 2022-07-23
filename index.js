const express = require('express');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// define root route
app.get('/', (req, res)=> {
	res.send('Hello World');
})

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);


// listen to the port
app.listen(port, ()=> {
	console.log(`Express Server Started at port ${port}`);
})