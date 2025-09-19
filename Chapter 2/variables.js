/*



*/





// Variable declaration and data types
let name = "John"; // String
const age = 30; // Number (constant)
var isStudent = true; // Boolean (older way)

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Type conversion
let stringNum = "50";
let convertedNum = Number(stringNum);
console.log("Converted number:", convertedNum, typeof convertedNum);

// Template strings
let message = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(message);

// Practice Exercise 2.1
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log("str1 type:", typeof str1);
console.log("str2 type:", typeof str2);
console.log("val1 type:", typeof val1);
console.log("val2 type:", typeof val2);
console.log("myNum type:", typeof myNum);