//prompt for first number
var a = Number(prompt("Give me a number."));

//prompt for second number
var b = Number(prompt("Give me another number."));

//check if input is a number
	if (isNaN(a) || isNaN(b)) {
		alert("Must input numbers.");
	} else {
//display the sum
		var result = a + b;
		alert("The sum is " + result);
}


