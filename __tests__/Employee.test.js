const Employee = require('../lib/Employee');

/*Employee constructor

Will contain three properties and four methods

properties:
-name (string)
-id (number)
-email (string)

methods:
-getName(): return name property
-getId(): return id property, expect to be any number
-getEmail(): return email property, expect to be a string matching an email
-getRole(): gets the employee role
*/


//check for the correct creation of a Player object
test('creates an employee object', () => {
    const employee = new Employee('Dave');

    //check for the creation of the Employee object properties
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    //use Jest expect string matching method that compares the string to a regex expression (email matching)
    expect(employee.email).stringMatching(employee.email | /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

//check for the correct retrieval of the Employee's name
test('gets the employee name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});
//check for the correct retrieval of the Employee's Id
test('gets the employee Id', () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toEqual(employee.id);
});
//check for the correct retrieval of the Employee's valid email
test('gets the employee email', () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(employee.email);
});
//check for the correct retrieval of the Employee's role (should be "Employee")
test('get the employee role', () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee');
});