const record = { id: 'HR-1005-T', name: 'Jill Smith', title: 'HR Manager', salary: 75000 };
 const url = 'http://portal.cosmicinnovation.com/employees'; 
 fetch(url, {
	method: 'POST', 
	headers: { 'Content-Type': 'application/json' 
}, body: JSON.stringify(record)//Add code to convert the employee record to JSON.
})
.then(response => response.json())
.then(data => 
	{ console.log('Success:', data); })
.catch((error) => { 
	console.log('Error:', error); 
});
