// Recap:

// var a = 9;

// function functionName() {
//     // body;
//     var b = 9;
// }

// functionName(); // Now the local execution context gets created

// Types of functions:

/* Use cases of IIFE:
Prevents variable and function decalarations from polluting Global space.
*/

// without IIFE:
// var globalVar = "I am global";

// function globalFun() {
//     console.log("In global scope");
// }
// // globalVar = "Manipulated";
// globalFun();
// console.log(globalVar);

// // IIFE:
// (function () {
//     var localVar = "I am local";
//     function localFun() {
//         console.log("In IIFE scope");
//     }
// })();

// console.log(localVar);
// localFun();


/*

1. First class functions/citizen: if function can be treated like other variables
var a = 9;

var x = function(){

}


2. HOF: Higher Order Functions:

3. Callback function


R: function returned by function => Higher Order Functions:
A: Assigned to any other variable => First class functions
P: passed as an argument/parameter => Higher Order Functions: => Callback function

*/

/* Examples of HOFs

1. forEach():
-> Iteration over arrays.
    let arr =[1,2,23];
    // for loop: => slow
    for(let i; .....){

    }
*/
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(
//     (num) => { console.log(num); }
// );

// Implicit and explicit return type of array functions

// var a = (x, y) => x * y; // implicit return type

// console.log(a(2,3)); // explicit return type


// // for ...of
// const numbers = [1, 2, 3, 4, 5];
// for(const num of numbers){
//     console.log(num);
// }


/* 2. map() function:
-> creates a new array.
-> Syntax: arrayname.map(callback function)
*/

// const numbers = [4, 16, 25, 36];
// // const newArr = numbers.map(Math.sqrt);
// // console.log(newArr);


// function myFunction(num) {
//     return num * 10;
// }

// const newArr = numbers.map(myFunction);
// console.log(newArr);

/* 3. filter()
-> creates a new array.
*/
// const ages = [24, 23, 25, 17];
// const firstClassCitizen = ages.filter(
//     (age) => {
//         return age > 18;
//     }
// );
// console.log(firstClassCitizen);


// const ages = [24, 23, 25, 17];
// ages.sort();
// console.log(ages);

/* 3. reduce() // HOF
-> executes reducer function.
-> returns single value

// syntax: arrayName.reduce(callbackFunction(acc, currentValue), initialVal)
*/

// find the largest:
const ages = [24, 23, 25, 17];

const largestValue = ages.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);
console.log(largestValue);
