const Employee = require ("./employee");

class Engineer extends Employee {
    constructor (name,id,email,github){
        super (name,id,email);
        this.github = github;
    }

    engineerGithub (){
        return this.github;
    }

    engineerRole (){
        return "Engineer"
    };
}


module.exports = Engineer;