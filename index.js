const inquirer=require("inquirer");
const fs = require("fs");

//function to create HTML file
//function makeHTML() {
    //return new promise ((resolve,reject) =>{
//fs.writeFile('index.html',data,err => {
   // if (err){
        //reject (err)
   //// } resolve (data)
   
//})
    //});

//An array of questions for user input
const questions = [
    {
        name:"Name",
        message: "What is the team manager's name?",
        type:"text"

    },
    { name: "ID",
    message: "What is the team Manager's ID?",
    type:"text"
    },
    {
        name:"Office number",
        message:"What is the team manager's office number?",
        type:"text"
    },
    {
        name:"Add Team member",
        message:"Would you like to add another Team member?",
        type:"list",
        choices:['Engineer','Intern','Im done building team']

    },

    
    

    function init() {
        inquirer.prompt(questions)// TODO: Create a function to write README file
        .then(response=>{
            fs.writeFile("index.html",(response),
            error=>{
                if(error){
                    console.log(error);
                } else (console.log("response saved succesfully!"))
            });
        });
    }
    
    // Function call to initialize app
    init();