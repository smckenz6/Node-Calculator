const rs = require('readline-sync'); 

let num1;
let num2;
let opp;
let input = false;


let username = rs.question('What is your name? ');

function operations() {
    opp = rs.question('Welcome ' + username + ', what operation would you like to perform?');
    if((!input) && (opp === '+') || (opp === '-') || (opp === '*') || (opp === '/')) {
        console.log('Got it!');
        numbers();
    } else {
        console.log('That is not a valid operation.');
        operations();
    }
}
operations();

function numbers() {
    num1 = rs.questionInt('Please enter the first number: ');
    num2 = rs.questionInt('Please enter the second number: ');
    math();
}

function math() {
    if (opp === '+') {
        var sum = num1 + num2;
        console.log('The result is: ' + sum);
    } else if (opp === '-') {
        var minus = num1 - num2;
        console.log('The result is: ' + minus);
    } else if (opp === '*') {
        var multiply = num1 * num2;
        console.log('The result is: ' + multiply);
    } else if (opp === '/') {
        if(num2 === 0) {
            console.log('Please enter a different number.')
            numbers();
        } else {
            var divide = num1 / num2;
            console.log('The result is: ' + divide)
        }
    }
}


