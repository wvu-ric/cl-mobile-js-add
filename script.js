var snum1 = prompt("Enter the first number you want to add");
var snum2 = prompt("Enter the second number you want to add");

var num1 = Number(snum1);
var num2 = Number(snum2);

var sum = num1 + num2;

if (isNaN(sum)) {
  alert("This is not a number");
}
else {
     alert("Your sum is:" + sum);
}

alert(num1)
alert(num2)
