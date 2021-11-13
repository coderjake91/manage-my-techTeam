const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        //call parent constructor
        super(name, id, email);
        
        this.school = school;
    }
    getRole() {
        super.getRole() 
        //override parent getRole() method using super keyword to return 'Engineer'
        console.log('I am also an Intern!');
        return 'Intern';
    }
    getSchool() {
        console.log(`${this.name}'s school affiliation is with ${this.school}`);
        return this.school;
    }
}

module.exports = Intern;