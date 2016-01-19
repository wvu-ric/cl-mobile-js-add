"use strict";
//
//
function add() {
    //
    // getting user input
    var num1 = +document.getElementById('num-1').value;
    var num2 = +document.getElementById('num-2').value;
    //
    // adding number
    var result = parseFloat(num1) + parseFloat(num2);
    result = result.toFixed(3);
    //
    // displaying result
    document.getElementById('result').innerHTML = "The Result is: "+result
}