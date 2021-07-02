// test for adding a manager

const Manager = require ('../lib/Manager');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const manager = new Manager('Barry', 'Allen', 1, 1);

test('creates a manager object', () => {
    expectToBe(manager.icon, 'fab fa-mandalorian');
    expectToBe(manager.firstName,'Barry');
    expectToBe(manager.lastName, 'Allen');
    expectToBe(manager.role, 'Manager');
    expectNum(manager.id);
    expectNum(manager.officeNumber);
    expectStr(manager.email, '@');
});

test('gets manager\'s icon', () => {
    expectStr(manager.getIcon(), manager.icon);
});

test('gets manager\'s name', () => {
    expectStr(manager.getName(), `${manager.firstName} ${manager.lastName}`);
});

test('gets manager\'s role', () => {
    expectStr(manager.getRole(), manager.role);
});


test('gets manager\'s ID', () => {
    expectStr(manager.getId(), `${manager.id}`);
});

test('gets manager\'s office number', () => {
    expectStr(manager.getOfficeNumber(), `${manager.officeNumber}`);
});

test('gets manager\'s email', () => {
    expectStr(manager.getEmail(), manager.email);
});



