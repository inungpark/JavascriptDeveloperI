const customers = [
  "Allison Smith",
  "Ashley James",
  "Jon Bond",
  "Olivia Williams",
];
// Use the 'length' property to access the number of elements.
const numberOfCustomers = customers.length;
console.log("Number of customers => ", numberOfCustomers);
// Use the numeric index to get the 3rd element.
const thirdCustomer = customers[2];
console.log("Third customer => ", thirdCustomer);

const priceList = [50, 75, 125, 200, 400, 900];
for (let i = 0; i < priceList.length; i++) {
  // Display each price.
  console.log(priceList[i]);
}

let userIds = ["AD087X", "JC901", "KS28Y", "PWJ76"];
console.log("Before adding an element...");
// Print all the elements.
console.log(userIds);
// Add an element to the end of the array.
userIds.push("WX28I");
console.log("After adding an element...");
// Print all the elements.
console.log(userIds);

let favoriteFruits = ["mango", "orange", "peach"];
console.log("Before adding an element...");
// Print all the elements.
console.log(favoriteFruits);
// Add an element to the beginning of the array.
favoriteFruits.unshift("banana");
console.log("After adding an element...");
// Print all the elements.
console.log(favoriteFruits);

// This example shows how to use the splice() method to add multiple elements to an array at the specified index position.

let bookNames = [
  "The Sunken Child",
  "Secret of the Floridian Poet",
  "Forge of the Heart",
];
console.log("Before adding elements to index 1...");

console.log(bookNames); // Add multiple elements at index 1 in the array
bookNames.splice(1, 0, "Tried for Slaughter", "Avian Revelation");
console.log("After adding elements to index 1...");

console.log(bookNames); // Delete an element and add an element at index 1.
bookNames.splice(1, 1, "In the Woods");
console.log("After deleting and adding elements at index 1...");
console.log(bookNames);

// This example shows how to use the pop() method to remove the last element from an array.

let usernames = ["olailich", "nipsynev", "termline", "emishyte"];
console.log("Before removing the last element...");
// Print each element.
console.log(usernames);
// Remove last element from the array.
usernames.pop();
console.log("After removing the last element...");
// Print each element.
console.log(usernames);

// This example shows how to use the shift() method to remove the first element from the beginning of an array.

let sentenceWords = ["the", "tree", "fell", "unexpectedly", "short"];
console.log("Before removing the first element...");
//Print each element.
console.log(sentenceWords);
// Remove the first element from the beginning of the array.
sentenceWords.shift();
console.log("After removing the first element...");
//Print each element.
console.log(sentenceWords);

// This example shows how to use the splice() method to remove multiple elements from an array at the specified index position.

let customerNames = ["Techforce", "Saleshub", "Ideabiz", "Wooze"];
console.log("Before removing elements from index 2...");
// Print each element.
console.log(customerNames); //Remove two elements at index 2 in the array.
customerNames.splice(2, 2);
console.log("After removing elements from index 2...");
// Print each element.
console.log(customerNames);

// This example shows how to use the slice() method to create a copy of an entire array.
let invoiceIds = ["A001", "N239", "K923", "T750"];
console.log("Original array..."); // Print each element
console.log(invoiceIds); // Copy the entire array.
let copiedInvoiceIds = invoiceIds.slice();
console.log("Copied array..."); // Print each element.
console.log(copiedInvoiceIds);

/* This example shows how to use the slice() method to create a copy of a portion of an array by specifying ‘start index’ and ‘endindex’.*/
let invoiceIds2 = ["B006", "LK34", "W326", "P342"];
console.log("Original array..."); // Print each element.
console.log(invoiceIds2);
// Copy an array from index 1 to 2.
// Copied array will not contain element at index 3.
let copiedInvoiceIds2 = invoiceIds2.slice(1, 3);
console.log("Copied array...");
// Print each element.
console.log(copiedInvoiceIds2);

// This example shows how to use the includes() method to find a value in an array using only the required parameter.
let licenseNumbers = ["I-492P", "N-579K", "V-255S", "P-551R"];
// Find value in array elements.
console.log("License J-342A => " + licenseNumbers.includes("J-342A"));
console.log("License V-255S => " + licenseNumbers.includes("V-255S"));

/* This example shows how to use the indexOf() method to find the first index of the specified element in an array using only the required parameter.*/

let word = ["e", "l", "e", "p", "h", "a", "n", "t"];
// Find first occurrence of an element in the array.
console.log('The letter "p" occurs first at index => ' + word.indexOf("p"));
console.log('The letter "e" occurs first at index => ' + word.indexOf("e"));
// This example shows how to use the lastIndexOf() method to find the last index of the specified element in an array using the required parameter and the optional parameter.
let word2 = ["g", "i", "r", "a", "f", "f", "e"];
// Find last occurrence of an element in the array from specified index.
// The array will be searched backwards from the specified index.
console.log(
  'Last occurrence of letter "a" from index 4 is at index => ' +
    word2.lastIndexOf("a", 4)
);
console.log(
  'Last occurrence of letter "f" from index 4 is at index => ' +
    word2.lastIndexOf("f", 4)
);

/* This example shows how to use the findIndex() method to find the index of the first element that satisfies the given condition.
It uses a callback function that accepts only the element argument.*/
let studentMarks = [55, 64, 65, 87, 26, 100, 95, 39];
// Check if student has failed at least one subject.
let isFail = studentMarks.findIndex((mark) => mark < 40);
if (isFail >= 0) {
  console.log("Student has failed the semester");
} else {
  console.log("Student has passed the semester");
}

/* This example shows how to use the find() method to find the value of the first element that satisfies the given condition. 
Ituses a callback function that accepts three arguments: element, index, and array. */
let fruits = [
  { name: "Apple", qty: 40 },
  { name: "Orange", qty: 20 },
  { name: "Banana", qty: 5 },
  { name: "Tomato", qty: 10 },
  { name: "Mango", qty: 30 },
];
// Check whether product needs reordering.
let productToReorder = fruits.find((element, index, array) => element.qty < 10);
console.log("Product to reorder");
console.log(productToReorder);

// This example shows how to use the concat() method to merge three arrays.
let internalCustomerIds = ["CY4081", "DU6050"];
let externalCustomerIds = ["GP9009", "RG9337"];
let internationalCustomerIds = ["QZ7459", "OR2504"];
// Merge three arrays into one.
let customerIds = internalCustomerIds.concat(
  externalCustomerIds,
  internationalCustomerIds
);
// Print the customerIds array.
console.log(customerIds);

// This example shows how to use the toString() method to return a string that represents the elements of an array.
let schools = [
  "Pacific Grove College",
  "Rutherford University",
  "Lakewood Academy",
  "Elk Valley Technical School",
];
// Return a string that represents the schools array.
let schoolsString = schools.toString(); // Print the string.
console.log(schoolsString);

// This example shows how to use the join() method to join the elements of an array using a separator string.
let phones = [
  "Apple Iphone 7",
  "Samsung Galaxy S9",
  "Google Pixel 5",
  "OnePlus 8T",
];
// Join the elements of the array.
console.log(phones.join(" | "));

// This example shows how to use the sort() method with a compareFunction to sort the elements of an array.
let studentMarks2 = [
  { studentName: "John", mark: 45 },
  { studentName: "Bill", mark: 20 },
  { studentName: "Kate", mark: 78 },
  { studentName: "Alice", mark: 94 },
];
// Sort array according to mark in descending order using a compare function.
let sortedStudentMarks = studentMarks2.sort((a, b) => b.mark - a.mark);
// Print array elements.
console.log(sortedStudentMarks);
// When a compare function is used to compare numbers, a subtraction operation can be used as the sorting logic. To sort in
// ascending order, the value of 'b' is subtracted from the value of 'a' to determine if 'a' is lesser, greater, or equal to 'b'.
// But since the desired order is descending, the operands are reversed such that 'a' instead is subtracted from 'b'.

// This example shows how to use the reverse() method to reverse an array.
let sortedNumbers = [2, 5, 20, 54, 77, 89, 102, 323, 530];
// Reverse the array elements
let reverseSortedNumbers = sortedNumbers.reverse();
// Print array elements
console.log(reverseSortedNumbers);

// This example shows how to use the map() method with a callback function that accepts currentValue, index, and array.
let students = ["Kate", "Lucy", "Sheldon", "Barry", "Zara"];
// Convert each element into a student object.
let studentsArray = students.map((value, index, array) => {
  return { id: index, name: value };
});
// Print the array elements.
console.log(studentsArray);

// This example shows how to use the filter() method with a callback function that accepts the element only.
let players = [
  { name: "Adam", score: 7 },
  { name: "Alice", score: 8 },
  { name: "Brian", score: 12 },
  { name: "Cassey", score: 13 },
];
// Obtain players who have scores above 10.
let selectedPlayers = players.filter((player) => player.score > 10);
// Print array elements.
console.log(selectedPlayers);

// This example shows how to use the reduce() method with a callback function that accepts accumulator and currentValue.
let maleSprinters = [
  { name: "Usain Bolt", time: 9.58 },
  { name: "Tyson Gay", time: 9.69 },
  { name: "Yohan Blake", time: 9.69 },
  { name: "Asafa Powell", time: 9.72 },
  { name: "Justin Gatlin", time: 9.76 },
];
// Find total of sprint time.
let totalSprintTime = maleSprinters.reduce((acc, value) => acc + value.time, 0);
//Print array elements.
console.log("Total Sprint Time => " + totalSprintTime);

// This example shows how to use the flat() method with the depth of 2 to flatten an array.
let numbers = [2, 5, [8, 12, 32, 54, [89, 99]]];
// Flatten numbers array upto depth 2.
let flattenedNumbers = numbers.flat(2);
// Print array elements.
console.log(flattenedNumbers);

// This example shows how to use the every() method to check whether all the elements of an array pass a condition.
let qualityTests = [
  { name: "Test A", score: 79 },
  { name: "Test B", score: 67 },
  { name: "Test C", score: 89 },
];
// Check if every element passes the threshold value.
let isQualityControlPassed = qualityTests.every((test) => test.score > 65);
// Output result
console.log("Quality Status => " + isQualityControlPassed);

// This example shows how to use the some() method to check whether at least one element of an array passes a condition.
let shirts = [
  { brand: "Ralph Lauren", size: 30 },
  { brand: "Tommy Hilfiger", size: 28 },
  { brand: "Lacoste", size: 32 },
  { brand: "Gucci", size: 29 },
];
// Check whether at least one shirt would fit user size of 30.
let doesSizeFitUser = shirts.some((shirt) => shirt.size >= 30);
// Print output.
console.log("Can user purchase fitting shirt? " + doesSizeFitUser);

// This example shows how to use the spread syntax to expand an array into its elements. (Part 1 of 2)
//Define an array consisting of sales users
const sales_users = ["Jon Smith", "Linwood Franco", "Dave Hines"];
// Use the spread syntax in an array literal to include the elements of the 'sales_users' array in a new array.
const employees = [
  "Hariett Parks",
  ...sales_users,
  "Aurelia Haney",
  "Joanne Browning",
  "Nicole Novak",
];
// Verify that the 'employees' array contains the sales users.
console.log(employees);

// This example shows how to use the spread syntax to expand an array into its elements. (Part 2 of 2)
// Define a function that displays the sales users.
function displaySalesUsers(first, second, third) {
  const str = `The sales users are ${first}, ${second}, and ${third}.`;
  console.log(str);
}
// Use the spread syntax in the parameter when calling the displaySalesUsers() function.
displaySalesUsers(...sales_users);

// This example shows how to use the rest parameter syntax to condense multiple elements into an array.
// Define a function that uses a rest parameter to display an array of sales users.
function displaySalesUsers(...sales_users) {
  console.log(sales_users);
}
// Call the displaySalesUsers() function, passing three parameters that represent three sales users.
displaySalesUsers("Jon Smith", "Linwood Franco", "Dave Hines");

let customers2 = [
  { id: 432, name: "Gwen", rating: 4.9, bonus: 20 },
  { id: 112, name: "Jack", rating: 4.5, bonus: 40 },
  { id: 226, name: "Sam", rating: 4.0, bonus: 0 },
  { id: 102, name: "Sofia", rating: 3.9, bonus: 50 },
  { id: 324, name: "Marven", rating: 3.2, bonus: 0 },
];

let customersWithScore = customers2.map((customer) => {
    let score = customer.rating * 2.4 + customer.bonus;
  return { ...customer, score: score.toFixed(2)}
});

let sortedCustomersWithScore = customersWithScore.sort((a,b) => a.score - b.score);

sortedCustomersWithScore.splice(3,2);

let sortedCustomerNames = sortedCustomersWithScore.map((customer) => customer.name);

console.log(sortedCustomerNames.join(", "));


console.log("breakpoint");
