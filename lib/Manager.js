

// require employee constructor file
const Employee = require('./Employee');

// manager object that is an extension of the employee object
class Manager extends Employee {
    constructor(firstName, lastName, id, officeNumber) {
        super(firstName, lastName, id);
        
        this.icon = 'fab fa-mandalorian';
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };

    //function that retrieves user input of office number
    getOfficeNumber() {
        return `<span class="has-text-weight-bold">Office Number:</span> ${this.officeNumber}`;
    };
};

module.exports = Manager;