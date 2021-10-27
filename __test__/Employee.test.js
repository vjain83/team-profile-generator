const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');
const employee = new Employee('Varsha Jain', '123456', 'csvarshajain@gmail.com');

test('to check on employee object creation', () => {

    expect(employee.name).toBe('Varsha Jain');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('csvarshajain@gmail.com');
})

test('to check if getName() method work', () => {
    expect(employee.getName()).toBe('Varsha Jain');

})

test('to check if getId() method work', () => {
    expect(employee.getId()).toBe('123456');
})

test('to check if getEmail() method work', () => {
    expect(employee.getEmail()).toBe('csvarshajain@gmail.com');
})

test('to check if getRole() method work', () => {
    expect(employee.getRole()).toBe('Employee');
})


