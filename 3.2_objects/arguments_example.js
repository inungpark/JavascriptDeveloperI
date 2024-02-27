// This example function sums parameters passed to it and uses the arguments object to retrieve the parameters
function add() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
    // the arguments object is "Array-like"
  }
  console.log(`The sum of the ${arguments.length} numbers is ${sum}`);
  // Standard Array methods are not available in "Array-like" objects.
  // So, the following will throw an error.
  arguments.sort();
}
add(62, 34, 45, 93);
 