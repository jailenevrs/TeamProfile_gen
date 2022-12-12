const Employee = require ("./employee");

class Engineer extends Employee {
    constructor (name,id,email,github){
        super (name,id,email);
        this.github = github;
    }

    engineerGithub (){
        return this.github;
    }

    TeamRole (){
        return "Engineer"
    };
}


module.exports = Engineer;