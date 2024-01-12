// variable
// let name = "MSD";
// let jerseyNumber = 7;
// let runs = 39;
// function sum(){
//     console.log("Adds two numbers");
// }


/* Working of JS
1st iteration:
name: undefined
jerseyNumber: undefined
......

2nd interation:
name: "MSD"
*/


//  Array: Heterogeneous
// let player = ["MSD", 7, 39, 44, "CSK"];

/* Object
Defination: Collection of key-value pairs. (key:value)
1) Keys in objects are unique and these are strings => Automaticall converts numerical keys to Strings
2) values: can be anything/datatype
*/



/* Access values in Objects
1) using Dot 
2) sqaure brackets []
*/
// console.log(player["name"]);
// console.log(player[100]);



// CRUD: Create, Read, Update, Delete



// Syntax: objectName.propertyName = value;

// Insertion in Objects:
// player.country="India";

// Update in Objects

// delete player.name;
// player.name="Virat Kohli"
// console.log(player);


// Iteration in Objects:
// for...in loop
let player = {
    name: 'MSD',
    jerseyNumber: 7,
    runs: 39,
    age: 44,
    team: "CSK",
    trophies: ["T20 WC", "ICC WC", "Champions Trophy", "IPL"],
    retired: true,
    100: "Hundreds",
    obj: {
        firstname: "MS"
    },
}
// key: value
//General Synatx: for( const varName in Objectname){

// }

for (const xyz in player) {
    console.log(xyz + ":" + player[xyz]);
}

// for... of , for each, for ... in

// let arr = [3, "name", {name: "MSD"}]


// JSON: (JavaScript Object Notation):
/* 
key are quoted in JSON
values are limited to simple data types.

USE CASES: Data sent from server to a web page in sent in JSON format 

 */