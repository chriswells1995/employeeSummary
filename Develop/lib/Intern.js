// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(school, name, id, email) {


      super(name, id, email)
      this.school=school;

    }
    getSchool(){

        return this.school;
    }

    getRole(){

        return;
    }
  }
  
  const Ryan = new Intern("Rname", "Ryan", '1234', "r@gmail.com" )
  console.log(Ryan)
