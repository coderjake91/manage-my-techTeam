const Manager = require('../lib/Manager');

/*Manager class extends Employee

Will contain four properties and four methods

properties:
-name (string)
-id (number)
-email (string)
-officeNumber (string)

methods:
-getName(): return name property
-getId(): return id property, expect to be any number
-getEmail(): return email property, expect to be a string matching an email
-getRole(): returns 'Manager'
*/


//check for the correct creation of a Player object
test('creates an Manager object', () => {
    const manager = new Manager('Bob');

    //check for the creation of the Manager object properties
    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    //use Jest expect string matching method that compares the string to a regex expression (email matching)
    expect(manager.email).stringMatching(manager.email | /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    expect(manager.officeNumber).toEqual(expect.any(String));
});

//check for the correct retrieval of the Manager's name
test('gets the manager name', () => {
    const manager = new Manager('Bob');

    expect(manager.getName()).toBe('Bob');
});
//check for the correct retrieval of the Manager's Id
test('gets the manager Id', () => {
    const manager = new Manager('Bob');

    expect(manager.getId()).toEqual(manager.id);
});
//check for the correct retrieval of the Manager's valid email
test('gets the manager email', () => {
    const manager = new Manager('Bob');

    expect(manager.getEmail()).toEqual(manager.email);
});
//check for the correct retrieval of the Manager's role (should be "Manager")
test('get the manager role', () => {
    const manager = new Manager('Bob');

    expect(manager.getRole()).toBe('Manager');
});