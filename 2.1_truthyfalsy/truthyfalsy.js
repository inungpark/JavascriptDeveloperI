const boolFunction = Boolean();
if (boolFunction == false) console.log("1. Boolean function is false.");
// The following also initializes a variable with a value of false.
// The valueOf() method is used to check the primitive value of the variable.
const boolInstance = new Boolean();
if (boolInstance.valueOf() == false)
  console.log("2. Boolean instance is false.");
// However, the following statement produces a different result.
if (boolInstance) console.log("3. Boolean instance is true.");
/* The reason why the above statement evaluates to true is that boolInstance is an object, which is a truthy value and coerced totrue. */
console.log("4.", boolFunction);
console.log("5.", boolInstance);
console.log("6.", typeof boolFunction, typeof boolInstance);
console.log("7.", boolFunction.valueOf(), boolInstance.valueOf());

//function using boolean constructor as a function to evaluate the properties of an object

function registerUser(user) {
  if (!Boolean(user.fullname) || !Boolean(user.email)) {
    console.error("Name or email cannot be empty!");
  } else {
    if (Boolean(user.interests))
      console.log("Curate articles about " + user.interests.join(", ") + ".");
    if (Boolean(user.birthdate)) console.log("Calculate age of registrant.");
    if (Boolean(user.subscribe))
      console.log("Send monthly newsletters to " + user.email + ".");
    if (Boolean(user.photo))
      console.log("Upload " + user.photo + " to file server.");
  }
}
// Register a user
registerUser({
  fullname: "john smith",
  interests: ["cooking", "singing"],
  email: "jsmith@acme.com",
  birthdate: null,
  subscribe: true,
  photo: undefined,
});

//can use double bang instead of Boolean(value)

// function using ternary operators to evaulate truthy/falsy values
const minPaperCount = 25;
function getPrinterStatus(printer) {
  let isAddPaper = printer.paperCount < minPaperCount;
  let statusPaper = isAddPaper ? "Add more paper!" : "No need to add paper.";
  let statusInk = printer.inkLevel
    ? "No need to replace ink cartridge."
    : "Replace ink cartridge!";
  console.log("Printer Name: " + printer.name);
  console.log(statusPaper);
  console.log(statusInk);
} // Call the function.

getPrinterStatus({ name: "inkjet TS8250", paperCount: 10, inkLevel: 75 });
//add more paper, and no need to replace ink cartridge
getPrinterStatus({ name: "inkjet MB2750", paperCount: 65, inkLevel: 0 });
//no need to add paper, replace ink cartridge

let age = "5";
if (age == 5) {
  console.log("In 10 years, you will be " + (10 + age) + " years!");
}
// invalid result (string concatenation)

if (age === 5) {
  console.log("The age variable is a number data type");
} else if (age === "5") {
  console.log("The age variable is a string data type.");
}

// The variable must be a number if a mathematical operation was to be performed.
age = 5; // or Number(age)
if (age === 5)
  console.log("In 10 years, you will be " + (10 + age) + " years!"); // valid result (addition operation)Output
 
  