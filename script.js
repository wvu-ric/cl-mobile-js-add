//Josh Matheny "Add isNaN" Assignment
//Bring in inputs as strings
var snum1 = prompt("What is the first number that you would like to add?");
var snum2 = prompt("What is the second number that you would like to add?");

//Convert string inputs to numbers
var num1 = Number(snum1);
var num2 = Number(snum2);

//Check to see if each number is actually a valid number to be added
var check1 = isNaN(num1);
var check2 = isNaN(num2);

//"If" loop that checks the results of looking to see if each number is valid
//If both numbers are valid, the sum is calculated and displayed
//If one of the numbers isn't valid, then alert is displayed for the imput that doesn't work and the program ends
if (check1 == false && check2 == false){

  var sum = num1 + num2;
  alert("The sum of your numbers is: " + sum);

} else{
  if (check1 == true){
    alert("The first number is not valid...")
  }
  if (check2 == true){
    alert("The second number is not valid...")
  }
}
