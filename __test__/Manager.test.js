const Manager = require('../lib/Manager.js');

test('create office number', () => {
    const manager = new Manager('Blake', 1, 'stuff', 3);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test('get office number', () => {
    const manager = new Manager('Blake', 1, 'stuff', 3);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber)
});
test('get role', () => {
    const manager = new Manager('Blake', 1, 'stuff', 3);
    const roleValue = 'Manager'
    expect(manager.getRole()).toEqual(roleValue);
});