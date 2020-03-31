// TODO: Write code to define and export the Employee class 



// TODO: add error cases (not actual errors)
class Employee {

    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;

    }
  
    getName() {

        if (!this.name){
            console.log("No name, try again")
        }
        else{
        return this.name;
    
        }    }

    getId(){


        if (!this.id){
            console.log("No ID, try again")
        }
        else{
        return this.id;
    
        }    }

    getEmail(){
        if (!this.email){
            console.log("No email, try again")
        }else{
        return this.email;


        }

    }

    getRole(){
        // if (!new Employee){
        //     console.log('Error, Please try again')
        // }else{
        return 'Employee'
 
        // }
    }
  }
  
  module.exports = Employee;


//   const Jim = new Employee("Jim", '1234', "j@gmail.com" )
//   console.log(Jim)

// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'


