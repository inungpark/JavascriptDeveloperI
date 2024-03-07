class User {
  constructor(fName, lName) {
    // The following line of code generates an error because the variable is not declared.
    punctuation = ","; //will run if constructor takes punctuation argument
    this.firstName = fName;
    this.lastName = lName;
    this.bothNames = lName + punctuation + fName;
  }
  fullName() {
    returnthis.firstName + "" + this.lastName;
  }
}
let user1 = new User("Sarah", "James");
console.log(user1.fullName());
