// In this example, the 'showDate' function is passed into 'addEventListener' as a callback.
//Code execution doesn't stop at thatpoint.
//When the button is clicked, the 'date' and 'intro' values are displayed below
//'Program is running!'

let date;
let intro;
const start = document.getElementById("start");
const showDate = function () {
  console.log(`${intro} ${date}`);
};
start.addEventListener("click", showDate);
date = new Date();
intro = "Today's date is";
console.log("Program is running!");

// In this example, there are two function expressions. A greeting is displayed after 1 second.
const greeting = function (name) {
  // The function is assigned to a variable named 'greeting'.
  let greet = `Welcome to the course ${name}!`;
  let greetDiv = document.getElementById("greet");

  setTimeout(function () {
    // The anonymous function is defined and passed to the setTimeout method.
    greetDiv.innerHTML = greet;
  }, 1000);
};

greeting("user1"); 