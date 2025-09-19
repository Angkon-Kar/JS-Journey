/*
Variables in JavaScript:

Variables are the first building block you will be introduced to when learning most languages. Variables are values in your code that can represent different values each time the code runs.

Here is an example of two variables in a script:
 
    firstname = "Maaike"; 
    x = 2; 
And they can be assigned a new value while the code is running:
    firstname = "Edward"; 
    x = 7; 

Without variables, a piece of code would do the exact same thing every single time it was run. Even though that could still be helpful in some cases, it can be made much more powerful by working with variables to allow our code to do something different every time we run it.





Declaring variables

The first time you create a variable, you declare it. And you need a special word for that: 
let , var , or const . 

We'll discuss the use of these three arguments shortly. The second time you call a variable, you only use the name of the existing variable to assign it a new value: 
    let firstname = "Maria"; 
    firstname = "Jacky"; 


In our examples, we will be assigning a value to our variables in the code.
This is called "hardcoded" since the value of your variable is defined in your script instead of coming dynamically from some external input. This is something you won't be doing that often in actual code, as more commonly the value comes from an external source, such as an input box on a website that a user filled out, a database, or some other code that calls your code.


The use of variables coming from external sources instead of being hardcoded into a script is actually the reason that scripts are adaptable to new information, without having to rewrite the code.
 
We have just established how powerful the variable building block is in code. Right now, we are going to hardcode variables into our scripts, and they therefore will not vary until a coder changes the program. However, we will soon learn how to make our variables take in values from outside sources.

let, var, and const:
let , var , or A variable definition consists of three parts: a variable-defining keyword ( const ), a name, and a value. Let's start with the difference between let , var , or const . Here you can see some examples of variables using the different keywords:
    let nr1 = 12; 
    var nr2 = 8; 
    const PI = 3.14159; 
let and var are both used for variables that might have a new value assigned to them somewhere in the program. The difference between and var is complex. It is related to scope.


var has global scope and 
let has block scope. 
that you can use the variables defined with 
other hand, 
var 's global scope means
 var in the entire script. On the
 let 's block scope means you can only use variables defined
 with 
let in the specific block of code in which they were defined.
 Remember, a block of code will always start with 
{ and end with 
which is how you can recognize them.
 } ,
On the other hand, 
const is used for variables that only get a value
 assigned once—for example, the value of pi, which will not change. If you
 try reassigning a value declared with 
const , you will get an error:
 const someConstant = 3; 
someConstant = 4; 
This will result in the following output:
 Uncaught TypeError: Assignment to constant variable. 
We will be using 
should use 
let in most of our examples—for now, trust us that you
 let in most cases.



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