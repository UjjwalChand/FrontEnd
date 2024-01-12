/* Function:
Defination: Reusable block of code
Prinicple: DRY (Don't Repeat Yourself)
SRP: Single Responsibility Principle
*/

// var a = 2;
// var b = 3;
// console.log(a+b);

// 2+3+8787389668+99789789783+....

// function expression and function declaration?
// Syntax:
/* Argument vs Parameters */

// Syntax of function:
// function functionName(parameter){
//     // function body;
// }


// function declaration

// 1. Function with parameters and return
// function add(a,b)
//{
//    return a+b; // return keyword
// }

// function expression
// var a = function add(a,b){
//     return a+b; // return keyword
//  }


// let sum= add(2,3) // calling the function

// console.log(sum);





// 2. Function without parameters and without return:
// function print() {
//     console.log("This is a function to print the data");
// }


/* Types of functions:
1. Anonymous function: Function without name.

var a = 2;

let add = function (x, y) {
    return x + y;
}

const result = add(2, 3);
console.log(result);
*/

/* 2. Higher Order Function (HOF):
Receives function as a parameter or return a new function or BOTH
*/

// function add(x, y) {
//     return x + y;
// }

// function functionName(add){

// }

// function functionName() {
//  return function(){
//     console.log("Hello");
//  }
// }


/* 3. Arrow function
 Introduced in ES6 version of JS,
 Shorter syntax:

*/
// function sum(x,y){
//     return x+y;
// }

// implicit and explicit return ehaviour:

// let sum = (x, y) => {
//     console.log("It's an arrow function");
//     return x + y;
// }
// const result = sum(2, 3);
// console.log(result);

// IIFE: (Immediately Invoked Function)

// (function () {
//     console.log("IIFE");
// })();

// 5. Callback function: Asynchronous JS

// Execution Context:

/* Global Execution Context, Local Execution Context
2 phases of execution context:
i) Code creation / Variable Environment
ii) Thread of Execution 
*/




// console.log(x); // undefined
// var x = 5;


// let x = 5; 

// x=8;



function x() {
    // body
    // var, functions
}

x();
console.log("njknkj");

function y() {

}
y();