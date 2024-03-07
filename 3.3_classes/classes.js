// The basic syntax of a class declaration is as follows:
class ClassNameDeclaration {
  // The convention is to start the name of the class with a capital letter.
  constructor() {}
  // Adding the constructor is optional.
  method1() {}
  // There should be no comma between class methods.
  method2() {}
  method3() {}
}

// The basic syntax of a class expression is as follows:
// A class expression can be anonymous or named.
// The name is only visible in the scope of the class expression.
let ClassNameExpression = class OptionalName {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
};

// In this example, the 'MeetingRoom' class is used to create different meeting room objects.
class MeetingRoom {
  constructor(available) {
    if (available) {
      this.reservable = true;
    }
  }
}
// An instance of 'MeetingRoom' is created using the 'new' keyword and passing in a parameter.
let boardRoom = new MeetingRoom(true);
console.log(boardRoom);

// In this example, the class 'User' is set up to create user objects.
class User {
  constructor(user, email) {
    this.user = user;
    // User and email are assigned to the instance using 'this'.
    this.email = email;
  }
}
// An instance of a 'User' is created by passing 'user' and 'email' as parameters.
let user1 = new User("team_lead", "team@cosmicsoft.com");
console.log(user1);

// In this example, an instance of the 'User' class is created.
// Then the 'fullName' method is invoked on the object.
class User2 {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  fullName() {
    return this.firstName + "" + this.lastName;
  }
}
let user2 = new User2("Sarah", "James");
console.log(user2.fullName());

// In this example, getter and setter are used for the 'canReserve' property.
class MeetingRoom2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.canReserve = false;
  }
  set reservable(val) {
    this.canReserve = val;
  }
  get reservable() {
    return this.canReserve;
  }
}
let boardRoom2 = new MeetingRoom2(20);
boardRoom2.reservable = true;
console.log(boardRoom2.reservable);


// In this example, getter and setter are used for the 'canReserve' property.
class MeetingRoom3 {
  constructor(capacity) {
    this.capacity = capacity;
    this.canReserve = false;
  }
  set reservable(val) {
    this.canReserve = val;
  }
  get reservable() {
    return this.canReserve;
  }
}
let boardRoom3 = new MeetingRoom3(20);
boardRoom3.reservable = true;
console.log(boardRoom3.reservable);
