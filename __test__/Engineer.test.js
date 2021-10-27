const Engineer = require('../lib/Engineer')


test('create  Engineer object', () => {
    const engineer = new Engineer('Varsha', 12345, 'csvarshajain@gmail.com');

    expect(engineer.name).toBe('Varsha');
    expect(engineer.id).toBe(12345);
    expect(engineer.email).toBe('csvarshajain@gmail.com');
});

test('get github Name', () => {
    const engineer = new Engineer('Varsha')
    this.github = 'vjain83'
    expect(engineer.github).toBe('vjain83');

})

test('get role', () => {
    const engineer = new Engineer('Varsha')
    expect(engineer.role).toEqual(expect.stringContaining(engineer.role.toString()));

})