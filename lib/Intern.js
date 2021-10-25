const Employee = require('./Employee')
class Intern extends Employee {
    constructor(name = '') {
        super(name)
        this.school = this.school
    }
    getSchool() {
        return `${this.school}`
    }
    getRole() {
        return `${this.role}` // Overridden to return 'Intern'
    }

}
