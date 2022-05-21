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

// GET all employees
app.get('/api/employees', (req, res) => {
  const sql = `SELECT * FROM employees`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message:'Success',
      data: rows
    });
  });
});

// Get all candidates
app.get('/api/candidates', (req, res) => {
  const sql = `SELECT * FROM candidates`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Default response for any other request (Not Found)
//app.use((req, res) => {
//  res.status(404).end();
//});

app.listen(PORT, () => {
  console.log(`Server running on port 3001`);
});