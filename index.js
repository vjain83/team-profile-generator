const fs = require('fs')
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// empty array
const teamArray = [];
// Manager Prompt
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter Team Manager's Name.",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's name!");
                    return false;
                }
            }
        },

        {
            type: "input",
            message: "Please enter Manager's Id.",
            name: "id"

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
        .then(managerData => {
            //deconstruct the object
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber)
            // Pushing the input of prompt Manager to the empty arry
            teamArray.push(manager)
            console.log(manager)

        })
};

// Prompt for the Employee data
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
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Employee's name!");
                    return false;
                }
            }
        },

        {
            type: "input",
            message: "Please enter Employee's Id.",
            name: "id"
        },

        {
            type: "input",
            message: "Please enter Employee's Email address.",
            name: "email"
        },

        {
            when: (input) => input.role === "Engineer",
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's github username.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's github username!")
                }
            }
        },
        {
            when: (input) => input.role === "Intern",
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more Team Members?',
            default: false
        }
    ])
        .then(employeeData => {
            //deconstruct the object
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;
            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github)
                console.log(employee)
            }
            else if (role === "Intern") {
                employee = new Intern(name, id, email, school)
                console.log(employee)

            }
            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray)
            }
            else {
                return teamArray
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
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
