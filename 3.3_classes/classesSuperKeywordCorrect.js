//correct implementation
// of 'super' keyword.
class User {
  constructor(user, email) {
    this.user = user;
    this.email = email;
  }
}
class Employee extends User {
  constructor(user, email, id) {
    super(user, email); //must utilize super keyword to get constructor from parent class
    this.employeeId = id;
  }
}
let employ1 = new Employee("John Smith", "jsmith@gmail.com", 2);
console.log(employ1);