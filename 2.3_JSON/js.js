const jsObject = {
  song: {
    title: "Together We're Friends",
    artist: "Blue Jays Choir",
    length: 3.55,
    genre: "Country",
  },
};
const jsonString = JSON.stringify(jsObject);
console.log(jsonString);

const jsonString2 =
  '{ "profile": { "name": "Caryn Brown", "children": null, "age": 24, "smoker": false, "hobbies": ["biking", "hiking", "sailing"] }}';
const jsObject2 = JSON.parse(jsonString2);
console.log(jsObject2);



// This example shows how to use index position and dot notation to access parsed JSON data. (Part 1 of 2)
const productJson =
  '{ "name": "White T-shirt", "price": 5.99, "inventory": [ { "size": "S", "quantity": 100 }, { "size": "M", "quantity": 150 }, { "size": "L", "quantity": 75 } ], "returnable": true, "brand": { "name": "Luxury", "origin": "Taiwan" }, "customization": null }';
// Parsed JSON Data
const productJs = JSON.parse(productJson);
// Log Product Name
console.log("Product Name => ", productJs.name);
// Log Product Brand Name
console.log("Product Brand Name => ", productJs.brand.name);

console.log(productJs.inventory[0].quantity);

// This example shows how to use index position and dot notation to access parsed JSON data. (Part 2 of 2)
// Log Product Inventory
console.log("Product Inventory => ");
console.log("Size Quantity");
// Iterate over Product Inventory
for (let index = 0; index < productJs.inventory.length; index++) {
  // Log Inventory Item
  console.log(
    productJs.inventory[index].size,
    "\t",
    productJs.inventory[index].quantity
  );
}

// This example shows how to use the for...in statement and Object.entries() to process the parsed JSON data. (Part 1 of 2)
const productJson2 =
  '{ "name": "White T-shirt", "price": 5.99, "inventory": [ { "size": "S", "quantity": 100 }, { "size": "M", "quantity": 150 }, { "size": "L", "quantity": 75 } ], "returnable": true, "brand": { "name": "Luxury", "origin": "Taiwan" }, "customization": null }';
// Parsed JSON Data
const productJs2 = JSON.parse(productJson2);
// Log key-value pairs using for...in loop
console.log("for...in loop => ");
for (let item in productJs2) {
  // Log Inventory Item
  console.log(item, " => ", productJs2[item]);
}
// Log key-value pairs using Object.entries()
console.log("Object.entries() => ");
console.log(Object.entries(productJs2));

console.log("breakpoint");
