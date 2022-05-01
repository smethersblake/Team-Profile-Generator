const Intern = require('../lib/Intern.js');
test('create school object', () => {
    const intern = new Intern('Blake', 1, 'stuff','school');
    expect(intern.school).toBe('school');
});