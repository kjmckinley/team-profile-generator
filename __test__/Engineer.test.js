// test for creating an engineer

const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('Peter', 'Parker', 1, 'kylecodes');

test('creates an engineer object', () => {
    expectToBe(engineer.icon, 'fas fa-flask');
    expectToBe(engineer.firstName, 'Peter');
    expectToBe(engineer.lastName, 'Parker');
    expectToBe(engineer.role, 'Engineer');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
});

test('gets the new engineer\'s icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});

test('gets the new engineer\'s name', () => {
    expectStr(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('gets the new engineer\'s role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('gets the new engineer\'s ID', () => {
    expectStr(engineer.getId(), `${engineer.id}`);
});

test('gets the new engineer\'s email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets the new engineer\'s github', () => {
    expectStr(engineer.Github(), engineer.github);
});

