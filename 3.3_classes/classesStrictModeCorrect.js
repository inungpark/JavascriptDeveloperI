//correct implementation
class User2 {
	constructor(fName, lName, punctuation) {
	  // The following line of code generates an error because the variable is not declared.
	  this.punctuation = ","; //will run if constructor takes punctuation argument
	  this.firstName = fName;
	  this.lastName = lName;
	  this.bothNames = lName + punctuation + fName;
	}
	fullName() {
	  return this.firstName + "" + this.lastName;
	}
	fullNameP(){
	  return this.firstName + this.punctuation + this.lastName;
	}
  }
  let user2 = new User("Sarah", "James");
  console.log(user1.fullName());
  console.log(user1.fullNameP());
  
  