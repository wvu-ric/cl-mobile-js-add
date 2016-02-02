
function check(ifNum){
  var num = isNaN(ifNum);
  return num;
}


var num1 = prompt("Enter a number please.");

while(num1check = false){
  if(check(num1) == true){
    var num1 = prompt("Enter a valid number please.")
  }

  else{
    var num1check = true;
  }
}

var num2 = prompt("Enter another number.");

while(num2check = false){
  if(check(num2) == true){
    var num2 = prompt("Enter a valid number please.")
  }

  else{
    var num2check = true;
  }
}

var Number1 = Number(num1);
var Number2 = Number(num2);

var sum = (Number1 + Number2);
alert(sum);
//
