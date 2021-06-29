// employee object constructor

class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@weworkhere.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-user-ties'
    };
    // returns first and last name
    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `<span class="has-text-weight-bold">ID#:</span> ${this.id}`;
    };

    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-success">${this.email}</a>`;
    };

    getRole() {  
        return this.role;
    };
    
    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    };
};

module.exports = Employee;