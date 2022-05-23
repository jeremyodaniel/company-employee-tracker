const inquirer = require('inquirer');
const db = require('./db');

require('console.table');


initialize();

function initialize() {
  console.log('This is your employee tracker!');
  showOptions();
}

function showOptions() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'Please select an action below: ',
      choices: [
        'View All Employees',
        'View All Departments',
        'View All Roles',
        'Add An Employee',
        'Add A Department',
        'Add A Role',
        'Update An Employee Role',
      ]
    }
  ])
  .then(function(response) {
    switch(response.option) {
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'Add an employee':
        viewAllRoles();
        break;  
      case 'Add a department':
        addEmployee();
        break;        
      case 'Add a role':
        addRole();
        break;
      case 'Update an employee role':
        updateRole();
        break;
    }
  });
}

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows
      console.log('\n');
      console.table(employees);
    })
    .then(() => {showOptions()})
}

function viewDepartments() {
  db.findAllDepartments()
    .then(([rows])=> {
      let departments = rows
      console.log('\n');
      console.table(departments);
    })
    .then(()=> {showOptions()})
}

function viewRoles() {
  db.findAllRoles()
    .then(([rows])=> {
      let roles = rows
      console.log('\n');
      console.table(roles);
    })
    .then(()=> {showOptions()})
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: `What is the employee's first name?`
      },
      {
        type: 'input',
        name: 'last_name',
        message: `What is the employee's last name?`
      },
      {
        type: 'input',
        name: 'role_id',
        message: `What is the employee's role ID?`
      },
      {
        type: 'input',
        name: 'manager_id',
        message: `What is the manager's ID for this employee?`
      }
    ])
    .then(function (answer) {
      db.createEmployee(answer).then(() => showOptions())
        console.log('\n');
        console.log(`${answer.first_name} ${answer.last_name} was added to the database.`);
    })
}

function addDepartment() {
  inquirer
    .prompt([
       {
         type: 'input',
         name: 'name',
         message: 'What is the name of the department?'
       }
    ])
      .then(function (answer) {
        db.createDepartment(answer)
          .then(([rows])=> {
            let departments = rows
            console.log('\n');
            console.table(departments);
          })
          .then(() => {showOptions()})
      })
}

function addRole() {
  inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of the role?'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'How much is the salary?'
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'What is the department ID?'
        }])
      .then(function (answer) {
        db.createRole(answer).then(() => {showOptions()})
        console.log('/n');
        console.log(`You added a new role called: ${answer.title}`)
      })
}

function updateRole() {
  db.findAllEmployees()
  .then(([rows])=> {
    let employees = rows;
    const employeeOptions = employees.map(({
      id,
      first_name,
      last_name}) => ({name: `${first_name} ${last_name}`, value: id}))
  inquirer.prompt([{
    type:'list',
    name:'employeeId',
    message: 'Which employee would you like to update?',
    choices: employeeOptions
  }])
  .then(res => {
    let employeeId = res.employeeId;
    db.findAllRoles()
    .then(([rows])=> {
      let roles = rows;
      const roleOptions = roles.map(({
        id,
        title
      })=> ({name: title, value: id}));
      inquirer.prompt([{
        type:'list',
        name:'roleId',
        message: 'Which role would you like to assign?',
        choices: roleOptions
      }])
      .then(res => db.updateRole(employeeId, res.roleId))
      .then(() => showOptions())
    })
  })
})
   
}
