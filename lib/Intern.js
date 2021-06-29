// require employee constructor file
const Employee = require('./Employee');

// intern object that generates an employee with this job title
class Intern extends Employee {
    constructor(firstName, lastName, id, school) {
        super(firstName, lastName, id);

        this.school = school;
        this.role = 'Intern';
        this.icon = 'fas fa-scroll';
    };

    // gets user input for the school the intern attended
    getSchool() {
        return `<span class="has-text-weight-bold">School:</span> ${this.school}`;
    };
};

module.exports = Intern;