const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// connect to database

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'JODan00)',
    database: 'employees',
  },
  console.log('Connected to the employees database.')
);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port $(PORT)`);
});