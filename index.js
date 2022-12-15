const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./html_template");
const { inherits } = require("util");
const e = require("express");
const Manager = require("./libs/manager");
const Engineer = require("./libs/engineer");
const Intern = require("./libs/intern");

//array of all employees
const employeeArray = []


//adding manager 
function askManager() { 
  inquirer.prompt([
    {
        name:"Name",
        message: "What is the team manager's name?",
        type:"input"

    },
    { 
    name: "ID",
    message: "What is the team Manager's ID?",
    type:"input"
    },
    {
        name:"Office number",
        message:"What is the team manager's office number?",
        type:"input"
      
    },
    {
        name:"email",
        message:"What is the team manager's email?",
        type:"input"

    }
]).then ((answers)=>{
    const managerAnswers = new Manager (answers.Name,answers.ID,answers.Office_number,answers.email)
    employeeArray.push(managerAnswers)
TeamMenu();
})


}
function askEngineer(){
    inquirer.prompt(
        [
            {
                name:"name",
                message:"What is the employee's name",
                type:"input"
            },
            { 
                name:"ID",
                message: "what is the employee's id?",
                type:"input"
    
            },
            {
                name:"email",
                message:"what is the employee's email?",
                type:"input"
            },
            {
                name:"githubUser",
                message:"What is the engineer's github username?",
                type:"input"
            }
        ]
    ).then((answers)=>{
        const EngineerAnswers = new Engineer (answers.name,answers.ID,answers.email,answers.githubUser)
        employeeArray.push(EngineerAnswers)
        TeamMenu();
    })
}
function askIntern(){
    inquirer.prompt([
    {
        name:"Name",
            message:"What is the employee's name?",
            type:"input"
        },
        { 
            name:"ID",
            message: "what is the employee's id?",
            type:"input"

        },
        {
            name:"email",
            message:"what is the employee's email?",
            type:"input"

    },
    {
        name:"school",
        message:"What school does the Intern attend?",
        type:"input"

    }]
    ) .then ((answers)=>{
        console.log(answers)
        const InternAnswers = new Intern (answers.name,answers.ID,answers.email,answers.school)
        employeeArray.push(InternAnswers)
        TeamMenu();
    }
    )
}
function TeamMenu(){
    inquirer.prompt(
        {
        name:"TeamMem",
        message:"Would you like to add another Team member?",
        type:"list",
        choices:['Engineer','Intern','Im done building team']
       },
    ).then ((answers)=>{
console.log(answers)
if(answers.TeamMem==="Engineer")
    {
        askEngineer()
    } 
    if (answers.TeamMem==="Intern"){
        askIntern()
    } 
    else {
        console.log("Your team is complete!")

        generateHTML();
    }
    })
}
    // function addEmployee(){ inquirer.prompt([
    //     {
    //     name:"TeamMem",
    //     message:"Would you like to add another Team member?",
    //     type:"list",
    //     choices:['Engineer','Intern','Im done building team']
    //     },
    //     {
    //         name:"Name",
    //         message:"What is the employee's name",
    //         type:"input"
    //     },
    //     { 
    //         name:"ID",
    //         message: "what is the employee's id?",
    //         type:"input"

    //     },
    //     {
    //         name:"email",
    //         message:"what is the employee's email?",
    //         type:"input"
    //     },
    //     {
    //         name:"Github",
    //         message:"What is employee's github username?",
    //         type:"input",
    //         when: (input) => input.TeamMem === "Engineer"

    //     },
    //       {
    //      name:"school",
    //      message:"What school does the intern attend?",
    //      type:"input",
    //      when: (input)=> input.TeamMem === "Intern"
    //       }

   // ])
    // .then ((answers) =>{
    //     console.log(answers)
    // })
//}

    
    
    //writing index.html

    function generateHTML(team) {
           fs.writeFile("index.html",(template(employeeArray)),"utf-8")
        console.log("succesfully wrote to html!!")
        };

    
 
askManager();
