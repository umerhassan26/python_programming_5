// function greet () {
//    alert("Hellow"); 
// }

// greet();

// Create a calculator

const operator =  prompt('Enter operator to perform the calculation  (either + , - , * ,/): ');
let num1 = parseFloat (prompt('Enter the number 1'));
let num2 = parseFloat (prompt('Enter the number 2'));

let result;

if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-'){
    result = num1 - num2;
}
else if (operator == '*'){
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

alert("Result is" + result);

function hellow (){
    console.log("hellow world")
}

hellow();