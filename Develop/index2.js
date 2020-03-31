const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

let teamMembers = [];

const render = require("./lib/htmlRenderer");

const managerQuestions = [

    {
        type: "input",
        message: "Please enter the Manager's name",
        name: "name"
    },

    {
        type: "input",
        message: "Please enter the employee ID number",
        name: "id"
    },

    {
        type: "input",
        message: "Please enter the email",
        name: "email"
    },



    {
        type: "input",
        message: "Please enter the office number",
        name: "officeNumber",


    }
]

const questions = [

    {
        type: "input",
        message: "Please enter the name",
        name: "name"
    },

    {
        type: "input",
        message: "Please enter the employee ID number",
        name: "id"
    },

    {
        type: "input",
        message: "Please enter the email",
        name: "email"
    },

    {
        type: "list",
        message: "Please select the role",
        choices: ["Engineer", "Intern"],
        name: "role"
    },





    {
        type: "input",
        message: "Please enter the gitHub username",
        name: "gitHub",
        when: function (answers) {
            return answers.role === "Engineer";
        }
    },

    {
        type: "input",
        message: "Please enter the school name",
        name: "school",
        when: function (answers) {
            return answers.role === "Intern";
        }
    }
]
// define a function to utilize the program
function createManager() {
    // define constant questions for the inquirer prompt
    console.log("Create your team now")


    // use inquirer to gather information about the development team members by prompting the questions variable
    inquirer
        .prompt(managerQuestions)
        // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
        .then(function (answers) {
            const manager = new Manager(answers.name, parseInt(answers.id), answers.email, answers.officeNumber);
            teamMembers.push(manager);


            createTeam()
            // addAnother();
        })
}

function createTeam() {
    inquirer
        .prompt([{
            type: "list",
            message: "What would you like to do?",
            choices: ["Add Team Member", "Finished Building Team"],
            name: "choice"
        }]
        )
        .then(function (answers) {

            if (answers.choice === "Add Team Member") {
                addTeamMember()

            }
            else {
                buildTeam()

            }
        })


}

function addTeamMember() {
    // define constant questions for the inquirer prompt



    // use inquirer to gather information about the development team members by prompting the questions variable
    inquirer
        .prompt(questions)
        // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
        .then(function (answers) {

            switch (answers.role) {


                case "Engineer":
                    const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.gitHub);
                    teamMembers.push(engineer);
                    createTeam();
                    break

                case "Intern":
                    const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
                    teamMembers.push(intern);
                    createTeam();
                    break
                // add a default
            }

        })
}

function buildTeam() {
    console.log("Building Team")

    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}

createManager();
// function addAnother(){

//     inquirer
//     .prompt(
//         [
//             {    
//                 type: "confirm",
//                 message: "Do you want to add another employee?",
//                 name: "another",
//                 when: function(another){
//                     if(another){
//                           addAnother();

//                   }
//                     else{
//                         render(html);

//                     }
//                 }
//             }


//         ]
//     )
// }

// declare a render function to render the information to the HTML page
// function render(html){


// }
// call functions


// Don't want to be able to add multiple managers

// create team

    // create manager

    // create team member
        // add an engineer
            // add a new team member
        // or add an intern
            // add a new team member
        // or done (Build Team)
