const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const writeFile = require('../utils/generate-site');
const generateProfile = require('../src/page-template');

/*App Functionality Pseudocode
First, Prompt for Team manager's info ('managerPrompt')

Then, present 'optionMenu' 
    (user chooses between)
        ->Add Engineer (if 'Add Engineer' option, then call 'engineerPrompt', upon exit, return to 'optionMenu')
        ->Add Intern (if 'Add Intern' option, then call 'internPrompt', upon exit, return to 'optionMenu')
        ->Finish and Build Team Profile (call 'buildProfile')
*/

class TeamProfileBuilder {
    constructor() {
        this.team = [];
    }
    optionMenu() {

        console.log(`
        =======================================
                Team Member Option Menu
        =======================================
        `);

        inquirer.prompt({
            type: 'list',
            name: 'option',
            message: "Please choose to add an Engineer or an Intern employee team member, select 'Build Team Profile' or 'Exit Application'",
            choices: ["Add Engineer", "Add Intern", "Build Team Profile", "Exit Application" ]
        })
        .then(({ option }) => {
            switch(option) {
                case "Add Engineer":
                    this.engineerPrompt();
                    break;
                case "Add Intern":
                    this.internPrompt();
                    break;
                case "Build Team Profile":
                    console.log("Building Your Team profile now...");
                    this.buildProfile();
                    break;
                default:
                    console.log("Exiting Application! Thank you for using Manage My TechTeam!");
            }
        });
    }

    entryPrompt() {

        console.log(`
        =======================================
            Welcome to 'Manage My TechTEAM'
        =======================================
        Let's generate your custom Team Profile!

        First, please step through entry of your Team Manager's information...

        `);

        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of your Team Manager? (Required)',
                validate: nameInput => {
                    if(!nameInput) {
                        console.log("Please enter your Project Manager's name!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is your Manager's employee id? (Required)",
                validate: idInput => {
                    if(!idInput) {
                        console.log("Please enter your Project Manager's employee id!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your Manager's employee email? (Required)",
                validate: emailInput => {
                    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(!re.test(emailInput)) {
                        console.log("You have not entered a valid email address");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNum',
                message: "What is your Manager's office phone number? (accepted formats: XXX-XXX-XXX, XXX.XXX.XXXX, XXX XXX XXXX) (Required)",
                validate: phoneInput => {
                    let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    if(!re.test(phoneInput)) {
                        console.log("You have not entered a valid phone number format");
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(({ managerName, managerId, managerEmail, managerOfficeNum }) => {
            const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNum);
            this.team.push(manager);
        })
        .then(() => {
            this.optionMenu();
        });
    }

    engineerPrompt() {
        console.log(`
        =======================================
            Add an Engineer to your Team!
        =======================================

        `);

        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the Engineer? (Required)',
                validate: nameInput => {
                    if(!nameInput) {
                        console.log("Please enter your Engineer's name!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your Engineer's employee id? (Required)",
                validate: idInput => {
                    if(!idInput) {
                        console.log("Please enter your Engineer's employee id!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your Engineer's employee email? (Required)",
                validate: emailInput => {
                    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(!re.test(emailInput)) {
                        console.log("You have not entered a valid email address");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is your Engineer's Github username? (Required)",
                validate: nameInput => {
                    if(!nameInput) {
                        console.log("Please enter your Engineer's Github username!");
                        return false;
                    } else {
                        return true;
                    }
                } 
            }
        ])
        .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            this.team.push(engineer);
        })
        .then(() => {
            this.optionMenu();
        });
    }

    internPrompt() {
        console.log(`
        =======================================
            Add an Intern to your Team!
        =======================================

        `);

        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the Intern? (Required)',
                validate: nameInput => {
                    if(!nameInput) {
                        console.log("Please enter your Intern's name!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your Intern's employee id? (Required)",
                validate: idInput => {
                    if(!idInput) {
                        console.log("Please enter your Intern's employee id!");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your Intern's employee email? (Required)",
                validate: emailInput => {
                    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(!re.test(emailInput)) {
                        console.log("You have not entered a valid email address");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is your Intern's school affiliation? (Required)",
                validate: nameInput => {
                    if(!nameInput) {
                        console.log("Please enter your Intern's school affiliation");
                        return false;
                    } else {
                        return true;
                    }
                } 
            }
        ])
        .then(({ internName, internId, internEmail, internSchool }) => {
            const intern = new Intern(internName, internId, internEmail, internSchool);
            this.team.push(intern);
        })
        .then(() => {
            this.optionMenu();
        });
    }

    buildProfile() {
        console.log(this.team);

        //const [manager, ...team] = this.team;

        writeFile(generateProfile(...this.team)).then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        return;
    }
}

module.exports = TeamProfileBuilder;