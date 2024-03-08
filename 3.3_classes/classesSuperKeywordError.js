// This example shows what happens when the 'super' keyword
//is not used before the 'this' keyword in a child class.
class User {
	constructor(user, email) {
	  this.user = user;
	  this.email = email;
	}
  }
  class Employee extends User {
	constructor(id) {
	  this.employeeId = id; //returns reference error. must call super constructor in derived class first
	}
  }
  let employ1 = new Employee(1);