const Employee = require('../lib/Employee.js');


test('create employee object', () => {
    const employee = new Employee('Blake', 1, 'stuff')
    expect(employee.name).toBe('Blake')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});
test('get employee name', () => {
    const employee = new Employee('Blake', 1, 'stuff');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
test('get employee id', () => {
    const employee = new Employee('Blake', 1, 'stuff');
    expect(employee.getId()).toEqual(expect.any(Number));
});
test('get employee email', () => {
    const employee = new Employee('Blake', 1, 'stuff');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test('get role', () => {
    const employee = new Employee('Blake', 1, 'stuff');
    const roleValue = 'Employee'
    expect(employee.getRole()).toBe(roleValue);
});