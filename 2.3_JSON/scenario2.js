const url = 'http://cosmicuniversity.com/students/' + studentName;
fetch(url, {method: 'GET'})
.then((response) => {
	return response.json();
})
.then((data) => {
	for(let item in data){
		console.log(item, '=>', data[item]);
	}
.catch((error) => {
	  console.log(error);
	});
