// test for adding an intern

const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Clark', 'Kent', 1, 'UT');

test('creates a new intern object', () => {
    expectToBe(intern.icon, 'fas fa-scroll');
    expectToBe(intern.firstName, 'Clark');
    expectToBe(intern.lastName, 'Kent');
    expectToBe(intern.role, 'Intern');
    expectNum(intern.id);
    expectToBe(intern.school, 'UCF');
    expectStr(intern.email, '@');
});

test('gets the new intern\'s icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});

test('gets the new intern\'s name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('gets the new intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets the new intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets the new intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('gets the new intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});