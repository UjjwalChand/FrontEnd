let a = "Lavinsh" // String
let b = 23 // Number
let c = 56.6 // Number
let d = true // Boolean
let e = undefined ;
let f = null;
let g = Symbol("gobinda")
let h = Symbol("gobinda")

// let g = "gobinda";
// let h = "gobinda"
// console.log(g==h)

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
// console.log();

// ======= Refrence ===========
// 1)function
// 2) object
// 3) Array

function greet() {
    console.log("Hello Javascript");
}

greet()

// Syntax of Object 
// let human = {
//     name: "Lavinsh",
//     age: 18
// }

// console.log(human.age);

// syntax of arrray 
// let arr = [56,true,"JS"];
// console.log(arr[3]);


// =============== Primitive vs Refrence

// let num1 = 10;
// let num2=num1;

// num2 = 20;
// console.log(num1);
// console.log(num2);

// let hu = {
//     naam: "ankit",
//     age: 23
// }
// let hum = hu;
// hum.naam = "gobinda"

// console.log(hu.naam);
// console.log(hum.naam);


// let num1 = 18
let num1 = 10;
// num1=num1+18
num1+=18;
console.log(num1);

let arr = [56,23,14];
console.log(typeof arr);
console.log(arr instanceof Object);





