const xhr = new XMLHttpRequest();
const url = 'http://cosmicsoftwaresolutions.com/employees';
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		//Add code to parse the JSON response.
		const jsObj = JSON.parse(xhr.responseText);
		//Add code to process the parsed response by invoking a function.}};
		console.log(Object.entries(jsObj));
		//or to process the content of js object in this case, you can use the
		//following function to generate HTML code based on the content of the object.
		generateHTML(jsObject);
	}
}

