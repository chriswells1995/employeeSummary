// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name, id, email, github) {


      super(name, id, email)
      this.github=github;

    }
    getGitHub(){

        if (!this.github){
            console.log("No github username, try again")
        }
        else{
        return this.github;
    
        }    }

    getRole(){

        if (!new Engineer){
            console.log('Error, Please try again')
        }else{
        return 'Engineer'
    }
  }
}
  module.exports = Engineer;


//   const Daryl = new Engineer("Dname", "Daryl", '1234', "d@gmail.com" )
//   console.log(Daryl)