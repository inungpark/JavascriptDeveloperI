// The following is an example of an object in JavaScript.
let user = {
  firstName: "Sam",
  lastName: "Smith",
  age: 35,
  admin: true,
  created: new Date(),
};

// This example shows how to create an object using the Object() constructor.
let user1 = new Object();
user1.name = "Sam";
user1.age = 35;
user1.admin = false;
user1.created = new Date();
// This example shows how to create an object using the object initializer.
let user2 = { name: "Mary", age: 25, admin: true, created: new Date() };
// This example shows how to create an object using the Object.create() method.
let user3 = Object.create({});
user3.name = "Isabel";
user3.age = 46;
user3.admin = false;
user3.created = new Date();

// These examples show how to access the properties of the following object.
let user4 = { name: "Mark", age: 25, admin: true, created: new Date() };
console.log(user2.name);
// accessing the 'name' property using the dot notation.
console.log(user2["name"]);
// access the 'name' property using bracket notation.
// Properties in an object can be deleted using the delete keyword.
//The below deletes the “age” property of the object.
delete user4.age;
console.log(user4);

// These examples show how to enumerate the properties of the following object.
let user5 = { name: "John", age: 25, admin: true, created: new Date() };
// This example uses a 'for...in' loop to traverse the object properties.
for (let prop in user5) {
  console.log(prop, user5[prop]);
}

// This example uses 'Object.keys()' to grab the keys of the object in an array.
console.log(Object.keys(user5));

// This example uses 'Object.getOwnPropertyNames()' to grab the keys of the object.
console.log(Object.getOwnPropertyNames(user5));

// This object contains a greeting method. The greeting property is a function.
let user6 = {
  firstName: "Mary",
  lastName: "Smith",
  age: 25,
  greeting(greet) {
    console.log(`${greet}!`);
  },
  greetings: function (greeter) {
    //another way to define a method
    console.log(`${greeter}!?`);
  },
};
// The 'greeting' method is called with a 'greet' message passed in.
user6.greeting("Good Morning");
user6.greetings("Good Mornings");

// This object contains a greeting method that uses the 'this' keyword to access properties of the object.
let user7 = {
  firstName: "Mary",
  lastName: "Smith",
  age: 25,
  greeting(greet) {
    console.log(`${greet} ${this.firstName} ${this.lastName}!`);
  },
}; // The 'greeting' method is called with a 'greet' message passed in.
user7.greeting("Good Morning");

// This example shows how to define a getter in an object. The getter returns the average score.
let scores = {
  quiz: "Quiz 1",
  scores: [90, 70, 60, 50, 40, 100, 60],
  get average() {
    if (this.scores.length === 0) return 0;
    return (
      this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length
    );
  },
};
console.log(scores.average);

// This example shows how to define a setter in an object. The setter adds to the scores array.
let scores2 = {
  quiz: "Quiz 1",
  scores: [],
  set score(score) {
    if (score >= 0) this.scores.push(score);
  },
};
scores2.score = 90;
scores2.score = 80;
console.log(scores2.scores);

// When a variable is passed by value in a function argument,
//the value of the variable is copied into the function.
//Changes made to the variable inside the function does not affect the variable outside the function.
function passPrimitive(name) {
  name = "Jerry";
}
let person = "Tom";
passPrimitive(person);
console.log(`Hi, my name is ${person}.`);

// When a variable is passed by reference in a function argument,
//the reference or address of the variable is passed into the function.
//Changes made to the variable inside the function will affect the variable outside the function.
function passObject(settings) {
  settings.on = true;
}
let conf = { device: "microwave", on: false };
passObject(conf);
console.log(conf);

// In this example, 'Object.assign()' is used inside the 'cloneObject' function
//in order to clone any object passed in.
function cloneObject(obj) {
  return Object.assign({}, obj);
} // This example illustrates the 'scores' object was cloned and is an entirely different object.
let scores3 = { quiz: "Quiz 1", scores: [90, 70, 60, 50, 40, 100, 60] };
let newScores = cloneObject(scores3);
let newScores2 = cloneObject(scores3);
newScores.scores = [];
console.log(scores3, newScores, newScores2);

/* In this example function, the 'hasOwnProperty' method is used 
//so the function only returns the property value if it is owned by the object. */
function reservable(obj) {
  if (obj.hasOwnProperty("canReserve")) {
    return obj.canReserve;
  } else {
    return false;
  }
} // This examples shows the application of the function.
let meetingRoom = { canReserve: true, capacity: 20 };
console.log(reservable(meetingRoom));

// example using the freeze method
const user8 = { role: "guest" };
Object.freeze(user8);
user8.role = "admin";
console.log(user8);

// example using the preventExtensions methods
const user9 = { role: "guest" };
Object.preventExtensions(user9);
try {
  Object.defineProperty(user9, "age", { value: 25 });
} catch (e) {
  console.log(e);
}

// example using the seal method
const user10 = { role: "guest" };
Object.seal(user10);
user10.role = "member";
delete user10.role;
// unable to be deleted when sealed
console.log(user10);

/* This example shows how to define an object named 'boardRoom' that 
inherits the properties and methods of another object named'meetingRooms'. */
let meetingRooms = {
  reservable() {
    if (this.hasOwnProperty("canReserve")) {
      return this.canReserve;
    } else {
      return false;
    }
  },
  location: "mainBuilding",
};

let boardRoom = Object.create(meetingRooms);
boardRoom.canReserve = true;
boardRoom.capacity = 20;
boardRoom.location = "satellite";
// Creates own 'location' property on 'boardRoom'.

console.log(boardRoom.reservable());
console.log(boardRoom.capacity);
console.log(boardRoom.location);

// In this example, a “hello” method is added to the Animal prototype
// and then modified to illustrate how it impacts instances ofthe object.
function Animal(name) {
  this.name = name;
}
let cat = new Animal("Kitty");
let dog = new Animal("Puppy");
Animal.prototype.hello = function () {
  // create a function
  console.log(`Hi, my name is ${this.name}.`);
};
cat.hello();
dog.hello();

cat.sound = function () {
  console.log("meowww..");
};
dog.sound = function () {
  console.log("woofff!!");
};
Animal.prototype.hello = function () {
  // modify the function
  console.log(`${this.name}'s the name. What's yours?`);
};
cat.hello();
dog.hello();
cat.sound();
dog.sound();

// In this example, a Set is created from an array so that only unique values are included.
// A new value is also added.
let decades = [1990, 1990, 2000, 2010, 1990, 2000, 2020];
let uniqueDecades = new Set(decades);
uniqueDecades.add(1980);
console.log(uniqueDecades);

// In this example, a map is used, instead of an object,
// for recording quiz scores since the data can be easier to work with.
let quizScores = new Map();
quizScores.set("quiz1", [100, 90, 80, 95, 60]);
quizScores.set("quiz2", [75, 85, 90, 80, 55]);
quizScores.set("quiz3", [65, 60, 45, 75, 50]);
console.log(quizScores.values());

console.log("breakpoint");
