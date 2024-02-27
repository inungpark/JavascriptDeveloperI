function purchasePlanLoose(years) {

	if (years == 0) {   
	  console.error('Invalid web hosting plan'); 
	} else if (years == 1) {;   
	  console.log('standard price'); 
	} else if (years == 3) {   
	  console.log('discounted price!'); 
	} else if (years == 5) {   
	  console.log('discounted price + free domain hosting!'); 
	} else {   
	  console.error('cannot find package :('); 
	}
  }
  
		let years = 5; // e.g.: 5 years was selected
  
  console.log('type: ', typeof years); // determine the data type
  console.log('value: ', years);purchasePlanLoose(years);

  // Here, an empty string is passed to the function.
  // The string is converted to a number such as Number('')when evaluated.
  purchasePlanLoose('');