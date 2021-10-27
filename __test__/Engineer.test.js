const Engineer = require('../lib/Engineer')

const engineer = new Engineer('Varsha', '12345', 'csvarshajain@gmail.com', 'vjain83');

test('create  Engineer object', () => {

    expect(engineer.name).toBe('Varsha');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('csvarshajain@gmail.com');
    expect(engineer.github).toBe('vjain83')
});

test('get github Name', () => {
    expect(engineer.getGithub()).toBe('vjain83');

})

test('get role', () => {

    expect(engineer.getRole()).toBe('Engineer')

})