class Employee {
    constructor (name,id,email){
        this.name=name;
        this.id=id;
        this.email = email;
    }


employeeName () {
    return this.name;
}

employeeID () {
return this.id;
}

employeeEmail () {
    return this.email;
}
TeamRole(){
    return "Employee"
}

}

module.exports = Employee;