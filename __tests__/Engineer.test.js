const Engineer = require('../lib/Engineer');

/*Engineer class extends Employee

Will contain four properties and five methods

properties:
-name (string)
-id (number)
-email (string)
-github (string)

methods:
-getName(): return name property
-getId(): return id property, expect to be any number
-getEmail(): return email property, expect to be a string matching an email
-getRole(): returns 'Engineer'
-getGithub(): gets the engineer's github username
*/


//check for the correct creation of a Player object
test('creates an engineer object', () => {
    const engineer = new Engineer('Nina');

    //check for the creation of the Engineer object properties
    expect(engineer.name).toBe('Nina');
    expect(engineer.id).toEqual(expect.any(Number));
    //use Jest expect string matching method that compares the string to a regex expression (email matching)
    expect(engineer.email).stringMatching(engineer.email | /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    expect(engineer.github).toEqual(expect.any(String));
});

//check for the correct retrieval of the Engineer's name
test('gets the engineer name', () => {
    const engineer = new Engineer('Nina');

    expect(engineer.getName()).toBe('Nina');
});
//check for the correct retrieval of the Engineer's Id
test('gets the engineer Id', () => {
    const engineer = new Engineer('Nina');

    expect(engineer.getId()).toEqual(engineer.id);
});
//check for the correct retrieval of the Engineer's valid email
test('gets the engineer email', () => {
    const engineer = new Engineer('Nina');

    expect(engineer.getEmail()).toEqual(engineer.email);
});
//check for the correct retrieval of the Engineer's role (should be "Engineer")
test('get the engineer role', () => {
    const engineer = new Engineer('Nina');

    expect(engineer.getRole()).toBe('Engineer');
});

//check for the correct retrieval of the Engineer's github username
test("get the engineer's github username", () => {
    const engineer = new Engineer('Nina');

    expect(engineer.getGithub()).toEqual(engineer.github);
});