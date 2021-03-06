// require employee constructor file
const Employee = require('./Employee');

// engineer object that generates an employee with this job title
class Engineer extends Employee {
    constructor(firstName, lastName, id, github) {
        super(firstName, lastName, id);
        
        this.icon = 'fas fa-flask';
        this.role = 'Engineer';
        this.github = github;
    };

    // user github
    Github() {
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${
            this.github}" target="_blank" class="has-text-primary">${this.github}</a>`
    };
};

module.exports = Engineer;