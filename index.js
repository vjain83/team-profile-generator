const fs = require('fs')
const inquirer = require('inquirer');

const generatePage = require('./src/generatePage')
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')

const teamData = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter Team Manager's Name.",
            name: "name"
        },

        {
            type: "input",
            message: "Please enter Manager's Id.",
            name: "Id"
        },

        {
            type: "input",
            message: "Please enter Manager's Email address.",
            name: "email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",

        }

    ])
        .then(managerInput => {
            //deconstruct the object
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber)
            teamData.push(manager)

        })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role.",
            choices: ['Engineer', 'Intern'],
            default: 'false'
        },
        {
            type: "input",
            message: "Please enter Employee's Name.",
            name: "name"
        },

        {
            type: "input",
            message: "Please enter Employee's Id.",
            name: "Id"
        },

        {
            type: "input",
            message: "Please enter Employee's Email address.",
            name: "email"
        },

        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            //deconstruct the object
            let { name, id, email, github, school, confirmAddEmployee } = employeeData;
            let employee;
            if (role === "Engineer") {
                employee = new Employee(name, id, email, github)
                console.log(employee)
            }
            else if (role === "intern") {
                employee = new Intern(name, id, email, school)
                console.log(employee)

            }
            teamData.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamData)
            }
            else {
                return teamData
            }
        })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            return err
        }
        else {
            console.log("File has been generated successfully")
        }
    })
}
addManager()
    .then(addEmployee)
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
