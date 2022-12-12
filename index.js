const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./html_template");

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
console.log(answers)
TeamMenu();
})


}
function askEngineer(){
    inquirer.prompt(
        [
            {
                name:"Name",
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
        console.log(answers)
        TeamMenu();
    })
}
function AskIntern(){
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
            type:"text"

    },
    {
        name:"school",
        message:"What school does the Intern attend?",
        type:"input"

    }]
    ) .then ((answers)=>{
        console.log(answers)
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
    })
}
    function addEmployee(){ inquirer.prompt([
        {
        name:"TeamMem",
        message:"Would you like to add another Team member?",
        type:"list",
        choices:['Engineer','Intern','Im done building team']
        },
        {
            name:"Name",
            message:"What is the employee's name",
            type:"text"
        },
        { 
            name:"ID",
            message: "what is the employee's id?",
            type:"text"

        },
        {
            name:"email",
            message:"what is the employee's email?",
            type:"text"
        },
        {
            name:"Github",
            message:"What is employee's github username?",
            type:"text",
            when: (input) => input.TeamMem === "Engineer"

        },
          {
         name:"school",
         message:"What school does the intern attend?",
         type:"text",
         when: (input)=> input.TeamMem === "Intern"
          }

    ])
    .then ((answers) =>{
        console.log(answers)
    })
    }

    //
    
    //writing index.html

    //function init() {
      //  inquirer.prompt(questions)
        //.then(response=>{
          //  fs.writeFile("index.html",(response),
            //error=>{
              //  if(error){
                //    console.log(error);
                //} else (console.log("response saved succesfully!"))
            //});
        //});

        //init();
 
askManager();
