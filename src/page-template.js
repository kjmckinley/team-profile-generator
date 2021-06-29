
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
