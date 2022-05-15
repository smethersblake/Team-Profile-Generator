const Intern = require('../lib/Intern.js');
test('create school object', () => {
    const intern = new Intern('Blake', 1, 'stuff','school');
    expect(intern.school).toBe('school');
});
test('get shool name', () => {
    const intern = new Intern('Blake', 1, 'stuff','school');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
});
test('check role', () => {
    const intern = new Intern('Blake', 1, 'stuff','school');
    roleValue = 'Intern'
    expect(intern.getRole()).toBe(roleValue);
});