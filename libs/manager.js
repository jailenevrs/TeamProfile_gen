const Employee = require("./employee")

class Manager extends Employee {
    constructor(name,id,email,officenumber){
        super(name,id,email)
        this.officenumber = officenumber;
    }

    ManOfficeNumber (){
        return this.officenumber;
    }

  TeamRole (){
        return "Manager"
    };
}
 module.exports = Manager;