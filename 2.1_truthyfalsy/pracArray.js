

let userIds = ['AD087X', 'JC901', 'KS28Y', 'PWJ76'];console.log("Before adding an element...");// Print all the elements.
console.log(userIds);// Add an element to the end of the array.
userIds.push('WX28I');
console.log("After adding an element...");// Print all the elements.
console.log(userIds);


let favoriteFruits = ['mango', 'orange', 'peach'];
console.log("Before adding an element...");// Print all the elements.
console.log(favoriteFruits);// Add an element to the beginning of the array.
favoriteFruits.unshift('banana');
console.log("After adding an element...");// Print all the elements.
console.log(favoriteFruits);


let bookNames = ['The Sunken Child', 'Secret of the Floridian Poet', 'Forge of the Heart'];
console.log("Before adding elements to index 1...");
console.log(bookNames);// Add multiple elements at index 1 in the arraybookNames.
splice(1, 0, 'Tried for Slaughter', 'Avian Revelation');
console.log("After adding elements to index 1...");
console.log(bookNames);// Delete an element and add an element at index 1.
bookNames.splice(1, 1, 'In the Woods');
console.log("After deleting and adding elements at index 1...");
console.log(bookNames);


let usernames = ['olailich', 'nipsynev', 'termline', 'emishyte'];
console.log("Before removing the last element...");// Print each element.
console.log(usernames);// Remove last element from the array.
usernames.pop();
console.log("After removing the last element...");// Print each element.
console.log(usernames);

let sentenceWords = ['the', 'tree', 'fell', 'unexpectedly', 'short'];
console.log("Before removing the first element...");//Print each element.
console.log(sentenceWords);// Remove the first element from the beginning of the array.
sentenceWords.shift();console.log("After removing the first element...");//Print each element.
console.log(sentenceWords);

let customerNames = ['Techforce', 'Saleshub', 'Ideabiz', 'Wooze'];
console.log("Before removing elements from index 2...");// Print each element.
console.log(customerNames);//Remove two elements at index 2 in the array.
customerNames.splice(2, 2);
console.log("After removing elements from index 2...");// Print each element.
console.log(customerNames);

let userIds2 = ['AD087X', 'JC901', 'KS28Y', 'PWJ76'];
console.log("Before adding an element...");// Print all the elements.
console.log(userIds2);// Add an element to the end of the array.
userIds.push('WX28I');
console.log("After adding an element...");// Print all the elements.
console.log(userIds2);

let favoriteFruits2 = ['mango', 'orange', 'peach'];
console.log("Before adding an element...");// Print all the elements.
console.log(favoriteFruits2);// Add an element to the beginning of the array.
favoriteFruits.unshift('banana');
console.log("After adding an element...");// Print all the elements.
console.log(favoriteFruits2);

let bookNames2 = ['The Sunken Child', 'Secret of the Floridian Poet', 'Forge of the Heart'];
console.log("Before adding elements to index 1...");
console.log(bookNames2);// Add multiple elements at index 1 in the array
bookNames.splice(1, 0, 'Tried for Slaughter', 'Avian Revelation');
console.log("After adding elements to index 1...");
console.log(bookNames2);// Delete an element and add an element at index 1.
bookNames.splice(1, 1, 'In the Woods');
console.log("After deleting and adding elements at index 1...");
console.log(bookNames2);	

let licenseNumbers = ['I-492P', 'N-579K', 'V-255S', 'P-551R'];// Find value in array elements.
console.log("License J-342A => " + licenseNumbers.includes('J-342A'));
console.log("License V-255S => " + licenseNumbers.includes('V-255S'));

let studentMarks = [55, 64, 65, 87, 26, 100, 95, 39];// Check if student has failed at least one subject.
let isFail = studentMarks.findIndex(mark => mark < 40);

if (isFail >= 0) {
	console.log("Student has failed the semester");
	}
 else {    
	console.log("Student has passed the semester");
}

const customers = ['Allison Smith', 'Ashley James', 'Jon Bond', 'Olivia Williams'];// Use the 'length' property to access the number of elements.
const numberOfCustomers = customers.length;
console.log('Number of customers => ', numberOfCustomers);// Use the numeric index to get the 3rd element.
const thirdCustomer = customers[2];
console.log('Third customer => ', thirdCustomer);

const priceList = [50, 75, 125, 200, 400, 900];
for(let i = 0; i < priceList.length; i++) {// Display each price.  
	  console.log(priceList[i]);
}

// Create a new XMLHttpRequest object and store it in a variable
const xhr = new XMLHttpRequest();
// Store the path of the JSON resource in a variable
const url = 'http://somewebsite/data.json';
// Use the responseType property to ensure that the response is in JSON format
xhr.responseType = 'json';// Open the HTTP Request by specifying the method and url
xhr.open('GET', url);
// Send the HTTP Request
xhr.send();


// Handle the HTTP Response
xhr.onreadystatechange = () => {
	// Check if HTTP request is done
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Convert the JSON data to a JavaScript objectconst js
		Object = JSON.parse(xhr.responseText);    }
	};

	// Tic Tac Toe game in JavaScript

let board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
  ];
  
  let currentPlayer = 'X';
  
  // Function to display the Tic Tac Toe board
  function displayBoard() {
	console.log('-------------');
	for (let i = 0; i < 3; i++) {
	  console.log(`| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} |`);
	  console.log('-------------');
	}
  }
  
  // Function to check if a player has won
  function checkWinner() {
	// Check rows and columns
	for (let i = 0; i < 3; i++) {
	  if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
		return true; // Check row
	  }
	  if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
		return true; // Check column
	  }
	}
  
	// Check diagonals
	if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
	  return true; // Check diagonal from top-left to bottom-right
	}
	if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
	  return true; // Check diagonal from top-right to bottom-left
	}
  
	return false;
  }
  
  // Function to check if the board is full
  function isBoardFull() {
	for (let row of board) {
	  for (let cell of row) {
		if (cell === ' ') {
		  return false;
		}
	  }
	}
	return true;
  }
  
  // Function to handle a player's move
  function makeMove(row, col) {
	if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
	  board[row][col] = currentPlayer;
	  return true; // Valid move
	}
	return false; // Invalid move
  }
  
  // Function to switch to the next player
  function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  
  // Function to reset the board
  function resetBoard() {
	board = [
	  [' ', ' ', ' '],
	  [' ', ' ', ' '],
	  [' ', ' ', ' ']
	];
	currentPlayer = 'X';
  }
  
  // Function to start the game
  function startGame() {
	resetBoard();
	displayBoard();
  }
  
  // Example: Run the game
  startGame();
  
  // Sample moves
  makeMove(0, 0);
  makeMove(1, 1);
  makeMove(0, 1);
  makeMove(1, 2);
  makeMove(0, 2);
  
  displayBoard();
  
  // Check for a winner
  if (checkWinner()) {
	console.log(`Player ${currentPlayer} wins!`);
  } else if (isBoardFull()) {
	console.log('It\'s a tie! The board is full.');
  } else {
	console.log(`Next move: Player ${currentPlayer}`);
  }

  class TreeNode {
	constructor(data) {
	  this.data = data;
	  this.children = [];
	}
  
	addChild(child) {
	  this.children.push(child);
	}
  }
  
  // Creating tree nodes
  const rootNode = new TreeNode("Root");
  const childNode1 = new TreeNode("Child 1");
  const childNode2 = new TreeNode("Child 2");
  
  // Connecting nodes to form a tree
  rootNode.addChild(childNode1);
  rootNode.addChild(childNode2);

  class Node {
	constructor(data, next = null) {
	  this.data = data;
	  this.next = next;
	}
  }
  
  // Creating nodes
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  
  // Connecting nodes to form a linked list
  node1.next = node2;
  node2.next = node3;


  // Creating a new div element
const newDiv = document.createElement("div");

// Adding some content to the div
newDiv.textContent = "Hello, this is a new div!";

// Appending the div to the body of the document
document.body.appendChild(newDiv);

const boolFunction = Boolean();