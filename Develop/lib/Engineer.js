// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(github, name, id, email) {


      super(name, id, email)
      this.github=github;

    }
    getGitHub(){

        return this.github;
    }

    getRole(){

        return;
    }
  }
  
  const Daryl = new Engineer("Dname", "Daryl", '1234', "d@gmail.com" )
  console.log(Daryl)