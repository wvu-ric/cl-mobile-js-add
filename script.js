var snum1 = prompt("Enter the first number you want to add");
var snum2 = prompt("Enter the second number.");

if (isNaN(snum1)) {
      alert("The first variable entered is not a number!");
}

if (isNaN(snum2)) {
      alert("The second variable entered is not a number!");
}

var num1 = Number(snum1);
var num2 = Number(snum2);

var sum = num1 + num2; {
alert("Your sum is " + sum);
}
