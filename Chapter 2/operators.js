// Arithmetic operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Comparison operators
console.log("a > b:", a > b);
console.log("a == '10':", a == '10'); // Loose equality
console.log("a === '10':", a === '10'); // Strict equality

// Logical operators
let x = true;
let y = false;
console.log("x && y:", x && y);
console.log("x || y:", x || y);
console.log("!x:", !x);

// Assignment operators
let c = 10;
c += 5; // c = c + 5
console.log("c += 5:", c);
c *= 2; // c = c * 2
console.log("c *= 2:", c);

// Practice Exercise 2.2
let myName = "John";
let myAge = 30;
let canCode = true;

console.log(`Hello, my name is ${myName}, I am ${myAge} years old and I can code JavaScript: ${canCode}`);

// Practice Exercise 2.3 - Pythagorean theorem
let sideA = prompt("Enter the length of side A:");
let sideB = prompt("Enter the length of side B:");
let hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
console.log(`The hypotenuse of the triangle is: ${hypotenuse}`);