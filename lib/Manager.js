const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        //call parent constructor
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    getRole() {
        super.getRole() 
        //override parent getRole() method using super keyword to return 'Engineer'
        console.log('I am also the Manager!');
        return 'Manager';
    }
}

module.exports = Manager;