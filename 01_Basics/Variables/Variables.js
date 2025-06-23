//  Variable should be meaning full

fullname = "Angkon Kar";
console.log(fullname);

price = 100;
console.log(price);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);

/*
Variable Rules

Variable names are case sensitive;
“a” & “A” is different.
Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
Only a letter, underscore( _ ) or $ should be 1st character.
Reserved words cannot be variable names.
*/

console.log("var : Variable can be re-declared & updated. A global scope variable.");
console.log("let : Variable cannot be re-declared but can be updated. A block scope variable.");
console.log("const : Variable cannot be re-declared or updated. A block scope variable.");

let name = "Angkon";
var age = 20;
const pi = 3.1416;

console.log(name);
console.log(age);
console.log(pi);

{
    let a = 10;
    console.log(a);
}

{
    let a = 9;
    console.log(a);
}