const inquirer = require('inquirer');
const mysql = require('mysql2');

require('console.table');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'JODan00)',
    database: 'employees',
  },
  console.log('Connected to the employees database.')
);

