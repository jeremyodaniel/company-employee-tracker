const mysql = require('mysql2');


const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'JODan00)',
    database: 'employees',
  },
  console.log('Connected to the employees database.')
);

connection.connect((err) =>{if(err) throw err;});


module.exports = connection;