const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        //call parent constructor
        super(name, id, email);
        
        this.github = github;
    }
    getRole() {
        super.getRole() 
        //override parent getRole() method using super keyword to return 'Engineer'
        console.log('I am also an Engineer!');
        return 'Engineer';
    }
    getGithub() {
        console.log(`${this.name}'s Github username is ${this.github}`);
        return this.github;
    }
}

module.exports = Engineer;