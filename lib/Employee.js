// employee object constructor

class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = 'Employee';
        this.id = id;
        this.email = `${firstName}.${lastName}@weworkhere.com`;
        this.icon = 'fas fa-user-ties'
    };

    // icon affiliated with the employee
    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    };
    // returns first and last name
    getName() {
        return `${this.firstName} ${this.lastName}`;
    };
    // returns job title of new employee
    getRole() {  
        return this.role;
    };
    // returns new employee id
    getId() {
        return `<span class="has-text-weight-bold">ID#:</span> ${this.id}`;
    };
    // returns company generated email of new employee
    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-success">${this.email}</a>`;
    };
    
    
};

module.exports = Employee;