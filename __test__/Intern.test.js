const Intern = require('../lib/Intern');

const intern = new Intern('InternA', '235', 'intern@gmail.com', 'UOT')

test('check Intern object', () => {
    expect(intern.name).toBe('InternA');
    expect(intern.id).toBe('235');
    expect(intern.email).toBe('intern@gmail.com');
    expect(intern.school).toBe('UOT');

})

test('check on getschool()', () => {
    expect(intern.getSchool()).toBe('UOT');
})

test('check on getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
})