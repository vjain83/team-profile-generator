const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '') {
        super(name)
        this.github = 'vjain83';
        this.role = engineer
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return this.Engineer// Overridden to return 'Engineer'
    }

}
module.exports = Engineer;
