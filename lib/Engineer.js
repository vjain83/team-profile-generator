const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name = '') {
        super(name)
        this.github = this.github
    }
    getGithub() {
        return `${this.github}`
    }
    getRole() {
        return `${this.role}` // Overridden to return 'Engineer'
    }

}
