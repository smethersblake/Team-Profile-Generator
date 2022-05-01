const Engineer = require('../lib/Engineer.js')

test('create a github', () => {
    const engineer = new Engineer('Blake', 1, 'stuff','blake.github')
    expect(engineer.github).toBe('blake.github')
});
test('get github username', () => {
    const engineer = new Engineer('Blake', 1, 'stuff','blake.github')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
});
test('get role', () => {
    const engineer = new Engineer('Blake', 1, 'stuff','blake.github');
    const roleValue = "Engineer"
    expect(engineer.getRole()).toBe(roleValue)
});