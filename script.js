var snum1 = prompt("Enter the first number you want to add");
var snum2 = prompt("Enter the second number you want to add");

// checking if the entered variables are numbers
if isNaN(snum1) {
  alert("The first number entered is not a number.");
}

if isNaN(snum2) {
  alert("The second number entered is not a number.");
}

// converts the variables into numbers if it is entered as a string
var num1 = Number(snum1);
var num2 = Number(snum2);


var sum = num1 + num2;
alert("Your sum is :" + sum);
