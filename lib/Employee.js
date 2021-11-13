class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`Your employee's name is ${this.name} `);
        return this.name;
    }
    getId() {
        console.log(`Your employee's id is ${this.id} `);
        return this.id;
    }
    getEmail() {
        console.log(`Your employee's email is ${this.email} `);
        return this.email;
    }
    getRole() {
        console.log("I am an Employee!")
        return 'Employee';
    }
}

module.exports = Employee;