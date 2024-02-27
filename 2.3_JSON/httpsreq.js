 // This example shows how to make an HTTP request and parse the JSON string that is received in the response. (Part 1 of 2)
// Create a new XMLHttpRequest object and store it in a variable
const xhr = new XMLHttpRequest();
// Store the path of the JSON resource in a variable
const url = "http://somewebsite/data.json";
// Use the responseType property to ensure that the response is in JSON format
xhr.responseType = "json";
// Open the HTTP Request by specifying the method and url
xhr.open("GET", url); // Send the HTTP Request
xhr.send();

// This example shows how to make an HTTP request and parse the JSON string that is received in the response. (Part 2 of 2)
// Handle the HTTP Response
xhr.onreadystatechange = () => {
  // Check if HTTP request is done
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // Convert the JSON data to a JavaScript object
    const jsObject = JSON.parse(xhr.responseText);
  }
};  