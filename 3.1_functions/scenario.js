// Add an IIFE to encapsulate all the code.
const time = document.getElementById("elapsedTime");
const btn = document.getElementById("btnTime");
const startTime = new Date();



const getSeconds = function () {
  // Convert this function to a named arrow function.
  let seconds = Math.floor((new Date() - startTime) / 1000);
  return seconds;
};



const displayTime = function () {
  // Define this as an anonymous function within addEventListener.
  time.innerHTML = `A total of ${getSeconds()} seconds used.`;
};
btn.addEventListener("click", displayTime);


(function (){ //code is wrapped in IIFE
const time = document.getElementById("elapsedTime");
const btn = document.getElementById("btnTime");
const startTime = new Date();

const getSeconds2 = () => Math.floor((new Date() - startTime) / 1000); // arrow function reduces number of lines

btn.addEventListener("click", function(){ 
	//an anonymous callback function is defined at the point it is needed
	time.innerHTML = `A total of ${getSeconds()} seconds used.`;
});

})();