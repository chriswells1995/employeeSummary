// define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {


      super(name, id, email);
      this.officeNumber=officeNumber;

    }
  
    getOfficeNumber(){

        if (!this.officeNumber){
            console.log("No officeNumber, try again")
        }
        else{
        return this.officeNumber;
    
        }

    }

    getRole(){

        // if (!new Manager){
        //     console.log('Error, Please try again')
        // }else{
        return 'Manager'
    // }
  }
}
  module.exports = Manager;

//   const Michael = new Manager("8765", "Michael", '1234', "m@gmail.com" )
//   console.log(Michael)
