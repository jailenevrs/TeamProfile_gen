const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./html_template");

//adding manager 
const manager = inquirer.prompt([
    {
        name:"Name",
        message: "What is the team manager's name?",
        type:"text"

    },
    { 
    name: "ID",
    message: "What is the team Manager's ID?",
    type:"text"
    },
    {
        name:"Office number",
        message:"What is the team manager's office number?",
        type:"text"
    }])

    const addEmployee = inquirer.prompt([
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
            when: input.teamMem=== "Engineer"

        },
          {
         name:"school",
         message:"What school does the intern attend?",
         type:"text",
         when: input.teamMem=== "Intern"
          }

    ])

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
 
