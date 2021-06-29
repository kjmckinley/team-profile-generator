
// constant links required
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const nameFormatter = require('../utils/helper');

const addEmployee = employeeInfo => {

    // initiates html string for employee cards
    let allCards = '';

    employeeInfo.forEach(employee => {    
        
        const { firstName, lastName, id, role } = employee;
        
        // blank variable to be filled with user input
        let extraInfo = '';
        let newEmployee = '';
        
        // fills in each case with the correct employee information
        switch (role) {
            case 'Manager':
                newEmployee = new Manager(nameFormatter(firstName), nameFormatter(lastName), id, employee.officeNumber);
                extraInfo = newEmployee.getOfficeNumber();
                break;
            case 'Engineer': 
                newEmployee = new Engineer(nameFormatter(firstName), nameFormatter(lastName), id, employee.github);
                extraInfo = newEmployee.Github();
                break;
            case 'Intern':
                newEmployee = new Intern(nameFormatter(firstName), nameFormatter(lastName), id, employee.school);
                extraInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(nameFormatter(firstName), nameFormatter(lastName), id);
        };
        // equation to concatenates all employee cards to html
        allCards += `
            <div class="column is-one-quarter-desktop">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                ${newEmployee.getIcon()}
                            </div>
                            <div class="media-content">
                                <p class="title is-4">${newEmployee.getName()}</p>
                                <p class="subtitle is-6">${newEmployee.getRole()}</p>
                            </div>
                        </div>
                        <div class="content">
                            <p>${newEmployee.getId()}<br />
                            ${extraInfo}<br />
                            ${newEmployee.getEmail()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`  
    });
    
    return allCards;
};

// pushes user imput into the index.html file
const populatePage = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
        </head>

        <body>
            <section class="hero is-primary is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Company Team</h1>
                    </div>
                </div>
            </section>

            <main class="m-6">
                <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                    ${addEmployee(templateData)}
                </div>
            </main>

        </body>

        </html>
    `;
};

module.exports = populatePage;