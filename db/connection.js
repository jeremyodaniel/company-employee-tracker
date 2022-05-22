const Mysql= require('mysql2');
require('dotenv').config();


const mysql = new Mysql(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PW, 
  {
    host: 'localhost',
    dialect: 'mysql',
    port: '3001'
  },
  console.log('Connected to the employees database.')
  );


module.exports = mysql;