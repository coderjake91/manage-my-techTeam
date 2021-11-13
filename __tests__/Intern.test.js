const Intern = require('../lib/Intern');

/*Intern class extends Employee

Will contain four properties and five methods

properties:
-name (string)
-id (number)
-email (string)
-school (string)

methods:
-getName(): return name property
-getId(): return id property, expect to be any number
-getEmail(): return email property, expect to be a string matching an email
-getRole(): returns 'Intern'
-getSchool(): gets the intern's school
*/


//check for the correct creation of a Player object
test('creates an intern object', () => {
    const intern = new Intern('Jim');

    //check for the creation of the Intern object properties
    expect(intern.name).toBe('Jim');
    expect(intern.id).toEqual(expect.any(Number));
    //use Jest expect string matching method that compares the string to a regex expression (email matching)
    expect(intern.email).stringMatching(intern.email | /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    expect(intern.school).toEqual(expect.any(String));
});

//check for the correct retrieval of the Intern's name
test('gets the intern name', () => {
    const intern = new Intern('Jim');

    expect(intern.getName()).toBe('Jim');
});
//check for the correct retrieval of the Intern's Id
test('gets the intern Id', () => {
    const intern = new Intern('Jim');

    expect(intern.getId()).toEqual(intern.id);
});
//check for the correct retrieval of the Intern's valid email
test('gets the intern email', () => {
    const intern = new Intern('Jim');

    expect(intern.getEmail()).toEqual(intern.email);
});
//check for the correct retrieval of the Intern's role (should be "Intern")
test('get the intern role', () => {
    const intern = new Intern('Jim');

    expect(intern.getRole()).toBe('Intern');
});

//check for the correct retrieval of the Intern's school
test("get the intern's school", () => {
    const intern = new Intern('Jim');

    expect(intern.getSchool()).toEqual(intern.school);
});