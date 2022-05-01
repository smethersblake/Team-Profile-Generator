const Employee = require('../lib/Employee.js');


test('create employee object', () => {
    const employee = new Employee('Blake', 1, 'stuff')
    expect(employee.name).toBe('Blake')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});