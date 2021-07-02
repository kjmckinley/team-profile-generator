// test for adding an intern

const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Clark', 'Kent', 1, 'UCF');

test('creates an intern object', () => {
    expectToBe(intern.icon, 'fas fa-scroll');
    expectToBe(intern.firstName, 'Clark');
    expectToBe(intern.lastName, 'Kent');
    expectToBe(intern.role, 'Intern');
    expectNum(intern.id);
    expectToBe(intern.school, 'UCF');
    expectStr(intern.email, '@');
});

test('gets intern\'s icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});

test('gets intern\'s name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('gets intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});