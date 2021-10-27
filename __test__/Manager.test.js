const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
const manager = new Manager('ManagerA', '111', 'abc@gmail.com', '222')


test('Check Manager object ', () => {
    expect(manager.name).toBe('ManagerA');
    expect(manager.id).toBe('111');
    expect(manager.email).toBe('abc@gmail.com');
    expect(manager.officeNumber).toBe('222');


})

test('to check if getName() method work', () => {
    expect(manager.getName()).toBe('ManagerA');

})

test('to check if getId() method work', () => {
    expect(manager.getId()).toBe('111');
})

test('to check if getEmail() method work', () => {
    expect(manager.getEmail()).toBe('abc@gmail.com');
})
test('to check if getEmail() method work', () => {
    expect(manager.getOfficeNumber()).toBe('222');
})
test('Check Manager getRole() function', () => {
    expect(manager.getRole()).toBe('Manager');
})


