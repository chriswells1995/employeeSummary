// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {


      super(name, id, email)
      this.school=school;

    }
    getSchool(){

        if (!this.school){
            console.log("No school, try again")
        }
        else{
        return this.school;
    
        }

    }

    getRole(){

        if (!new Intern){
            console.log('Error, Please try again')
        }else{
        return 'Intern'
    }
  }
}
  module.exports = Intern;

//   const Ryan = new Intern("Rname", "Ryan", '1234', "r@gmail.com" )
//   console.log(Ryan)
