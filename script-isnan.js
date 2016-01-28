var snum1 = prompt("Enter the first number you want to add");
var snum2 = prompt("Enter the second number you want to add");

var num1 = Number(snum1);
var num2 = Number(snum2);
//alert(isNaN(snum1));
if (isNaN(snum1)) {
  alert("Invalid Number 1, reload the page and try again");
  end();
}
if (isNaN(snum2)) {
  alert("Invalid Number 2, reload the page and try again");
  end();
}

var sum = num1 + num2;
alert("Your sum is : " + sum);


/* tried doing with switches, Logan ended up talking me out of it, will try again later
switch (isNaN(snum1)){
  case true:
    alert("Invalid Number 1, reload the page and try again");
    end();
    break;
  case false:
    var sum = num1 + num2;
    alert("Your sum is : " + sum);
    break;
}
switch (isNaN(snum2)){
  case true:
    alert("Invalid Number 2, reload the page and try again");
    end();
    break;
  case false:
    alert("Your sum is : " + sum);
    break;
}
  //alert("Invalid Number, reload the page and try again");
*/
