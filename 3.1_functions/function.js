function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(20, 30);
console.log(result);

const arr = [20, 30, sum];
let result2 = arr[2](arr[0], arr[1]);
console.log(result);

// This example shows different types of functions.
function fib(num1, num2) {
  // The 'fib' function is an 'outer' function. It is also a 'named' function.
  let num3 = (function () {
    // This 'inner' function is an 'anonymous' function.
    return num1 + num2;
  })();
  // This function is also invoked immediately using the parentheses. Therefore, it is an IIFE.
  return [num1, num2, num3];
}
const arr2 = fib(0, 1);
console.log(arr2);

function fib2(sequence, len) {
  let size = sequence.length;
  if (size >= len) {
    return sequence;
    // If condition has been met, return the sequence.
  }
  sequence.push(sequence[size - 2] + sequence[size - 1]);
  return fib2(sequence, len);
  // Call itself with the ‘return’ keyword.
}

const fibSeq = fib2([0, 1], 10);

console.log(fibSeq);

// Example 1:
const increment = function (num) {
  return num + 1;
};

// Arrow function version A
const incrementArrow = (num) => {
  return num + 1;
};

// Arrow function version B:
const incrementArrow2 = (num) => num + 1;

// Example 2:
const sum2 = function (num1, num2) {
  return num1 + num2;
};

// Arrow function version
const sumArrow = (num1, num2) => num1 + num2;

// Example 3
const greeting = function (name) {
  console.log(`Good Morning ${name}!`);
};

// Arrow function version
const greetingArrow = (name) => console.log(`Good Morning ${name}!`);

// Example 4
const random = function () {
  let num = Math.floor(Math.random() * 10) + 1;
  return num > 5 ? 0 : num;
};

// Arrow function version
const randomArrow = () => {
  let num2 = Math.floor(Math.random() * 10) + 1;
  return num2 > 5 ? 0 : num2;
};

let testnum = increment(9);
let randTestNum = randomArrow();
console.log(testnum);
console.log(randTestNum);

function fn() {
  return this;
}

console.log("this is: ", fn());
var person = {
  height: 172,
  weight: 80,
  sayHeight: function () {
    console.log("My height is:", this.height);
    console.log("this is: ", this);
  },
  sayWeight: () => {
    console.log("My weight is:", this.weight);
    console.log("this is: ", this);
  },
};
// this context is set to the person object.
person.sayHeight();
// called at the global scope. this is set to Window.
person.sayWeight();

// The 'map' method of the Array object is a higher-order function because it accepts a function as an argument.
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 2);
console.log(newNums);
// This example shows a higher-order function because it returns a function which is then used later.
const createMultiplyFunction = function (num) {
  return (num1) => num1 * num;
};
const multiplyBy10 = createMultiplyFunction(10);
console.log(multiplyBy10(5));
// Note that since a function is returned, the following is also allowed:
createMultiplyFunction(10)(5); // produces the same result as above (50)

// In this example, the function declaration is invoked before it is defined and no error occurs.
//However, when the functionexpression is invoked before it is defined, an error occurs.
sumDeclaration(5, 10);

/*sumExpression(50, 100); //this does not hoist, will return error
const sumExpression = function (num1, num2) {
  console.log(num1 + num2);
};*/

function sumDeclaration(num1, num2) {
  console.log(num1 + num2);
}

// This code shows an example of closure.
//The 'createScoreFunction' returns a function that adds to the scores array and then
//prints the number of values. The 'scores' array is private and cannot be manipulated except using 'addScore'.
function createScoreFunction() {
  let scores = [];
  return function (score) {
    scores.push(score);
    console.log(`Total scores: ${scores.length}`);
  };
}
// The function returned to 'addScore' still has access to 'scores' through closure.
const addScore = createScoreFunction();
addScore(70);
addScore(90);
addScore(100);

// This example shows an application of call, apply and bind to invoke a function on the 'objGreet' object,
//while assigning thevalue of 'this' to a different object; either 'user1' or 'user2'.
let objGreet = {
  morningGreet(punct) {
    console.log(`Good morning ${this.firstName}${punct}`);
  },
  eveningGreet(punct) {
    console.log(`Good evening ${this.firstName}${punct}`);
  },
};
let user1 = { firstName: "Mary" };
let user2 = { firstName: "Sam" };
objGreet.morningGreet.call(user1, "!");
// call invokes the function, and passes in the 'punct' parameter.
objGreet.eveningGreet.apply(user2, ["?"]);
// apply invokes the function, and passes in the 'punct' parameter as an array.
objGreet.eveningGreet.bind(user1, ".")();
// bind returns a function and binds the 'punct' parameter to the function, which is
//invoked using parentheses.
objGreet.eveningGreet(user2, ".");

/* Here is a simplified generator function that returns static strings */
function* rhymeGenerator() {
  yield "One, two, three, four, five,";
  yield "Once I caught a fish alive,";
  yield "Six, seven, eight, nine, ten,";
  yield "Then I let it go again.";
}
const myGenerator = rhymeGenerator();
/* The next method returns an object with the properties 'value',which contains the current value, and a boolean 'done', whichreturns true when there is no more value left to return.*/ console.log(
  myGenerator.next().value
);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
// returns 'undefined'. The 'done' property becomes 'true'.

// A generator is ideal when computation is required to generate the values.
//In this example, a generator produces a fibonacci sequence of 100 numbers.
//Each new number is added one at a time and the sequence is returned.
function* fibonacciSeq() {
  let start1 = 0,
    start2 = 1,
    cnt = 2;
  const sequence = [start1, start2];
  while (cnt <= 100) {
    let newNum = start1 + start2;
    start1 = start2;
    start2 = newNum;
    cnt++;
    sequence.push(newNum);
    yield sequence;
  }
}
const fib100 = fibonacciSeq();
console.log(fib100.next());
console.log(fib100.next());
console.log(fib100.next());
// Each time 'next()' is used, a new number is generated in the fibonacci sequence.

// This example uses an iterator to set up a factorial sequence that is progressive.
//An upper limit is provided. Each time'next()' is used, a new number and its factorial are displayed.
function progressiveFactorial(upperLimit) {
  let factorial = 1,
    num = 1;
  const factorialIterator = {
    // This is the iterator object.
    next() {
      // next method is required for iterator object.
      if (num <= upperLimit) {
        num++;
        factorial = factorial * num;
        return {
          value: { number: num, factorial },
          done: false,
        };
        // return value when more numbers in the sequence are available.
      }
      return { value: { number: num, factorial }, done: true };
      // return value when all numbers have been displayed.
    },
  };
  return factorialIterator; // return the iterator object.
}
let factorial10 = progressiveFactorial(10); // Iterator created with upper limit of 10.
factorial10.next(); // Iterates once, so the number is 2.
console.log(factorial10.next()); // Shows the factorial of 3.
console.log(factorial10.next());// Shows the factorial of 4.

console.log(breakpoint);
