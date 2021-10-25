const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name = '') {
        super(name)
        this.officeNumber = this.officeNumber
    }
    officeNumber() {
        return `${this.officeNumber}`
    }
    getRole() {
        return `${this.role}` // Overridden to return 'Intern'
    }

}
