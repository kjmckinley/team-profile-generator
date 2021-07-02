// test for adding an employee

const Employee = require ('../lib/Employee');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const employee = new Employee('The', 'Doctor', 11);

test('creates a employee object', () => {
    expectToBe(employee.icon, 'fas fa-user-ties');
    expectToBe(employee.firstName,'The');
    expectToBe(employee.lastName, 'Doctor');
    expectToBe(employee.role, 'Employee');
    expectNum(employee.id);
    expectStr(employee.email, '@');
});

test('gets the new employee\'s icon', () => {
    expectStr(employee.getIcon(), employee.icon);
});

test('gets new employee\'s name', () => {
    expectStr(employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test('gets the new employee\'s role', () => {
    expectStr(employee.getRole(), employee.role);
});

test('gets the new employee\'s ID', () => {
    expectStr(employee.getId(), `${employee.id}`);
});

test('gets the new employee\'s email', () => {
    expectStr(employee.getEmail(), employee.email);
});