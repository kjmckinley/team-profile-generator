
// Required links to be used as variable constants
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js')
const nameFormatter = require('./utils/helper');
const everyEmployee = [];

// An array of questions objects that will be used by inquirer
const questions = [

    // user choice
    {
        type: 'list',
        name: 'role',
        message: 'What is your new employee\'s role at the company?',
        choices: // function to allow only a single manager to be created
            () => {
            if (everyEmployee.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },

    // new employee first name
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is the ${role.toLowerCase()}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Error: You cannot leave this field blank!');
                return false;
            }
        }
    },

    // new employee last name
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is the ${nameFormatter(firstName)}'s last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Error: You cannot leave this field blank!');
                return false;
            }
        }
    },

    //new employee id number
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is ${nameFormatter(firstName)}'s ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid numeric value for the ID number!');
                return false;
            }
        }
    },

    // new employee office number
    {
        type: 'input',
        name: 'officeNumber',
        message:  ({ firstName }) => `What is ${nameFormatter(firstName)}'s office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('Please enter a valid numeric value.');
                return false;
            }
        }
    },

    // engineer github username
    {
        type: 'input',
        name: 'github',
        message: ({ firstName }) => `What is ${nameFormatter(firstName)}'s GitHub userame?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Error: You cannot leave this field blank!');
                return false;
            }
        }
    },

    // intern school name
    {
        type: 'input',
        name: 'school',
        message: ({ firstName }) => `What school does ${nameFormatter(firstName)} go to?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Error: You cannot leave this field blank!');
                return false;
            }
        }
    },

    // user choice to add another employee
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

// generates questions given to the user to create employees
const userPrompt = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {

        // adds to employee data array
        everyEmployee.push(userResponse);

        // adds another employee based on user selection
        if (userResponse.addEmployee) {
            return userPrompt();
        } else {
            return everyEmployee;
        };
    });
};

// generates answers into html
const writeToPage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Page created successfully!');
    });
};

// generates questions
console.log(`Welcome to the Team Profile Generator! Please follow the prompts below and create your team!`);

userPrompt()
    .then(data => generatePage(data))
    .then(generateHtml => writeToPage(generateHtml))
    .catch(err => console.log(err));