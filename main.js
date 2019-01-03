"use strict";
exports.__esModule = true;
var message = 'Welcome Back!';
console.log(message);
// variable declarations
var x = 10;
// const variables must always be declared with a value (because they can't be reassigned)
var y = 20;
// variable types 
var isBeginner = true;
var total = 1;
var name = 'Lars';
// VSCode will only recommend methods that correspond with each type -- e.g. concat for strings
var fullName = name.concat(' Mackenzie');
// multi-line variable with embedded values. must use backticks. line break displays in console.
var sentence = "My name is " + fullName + ".\nI have written " + total + " program(s) in TypeScript. \nI am a beginner: " + isBeginner;
console.log(sentence);
var n = null;
var u = undefined;
// null & undefined are subtypes of all types 
var isNew = null;
var myName = undefined;
// both declare an array of numbers. either syntax is fine
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple -- allows for two types within one array 
// order of values has to match order and quantity of types.
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// any type can be reassigned -- good to use if you're relying upon user input 
var randomValue = 10;
randomValue = true;
randomValue = 'hi';
// this function checks to see if an object has a name and returns the name if it does 
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
var myVariable = 10;
myVariable = { name: 'Reed' };
myVariable = { age: 8 };
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// type inference 
// if a variable is declared without an initialized value, it can be redeclared to new types without problem. 
var a;
a = 10;
a = true;
// if a variable is declared with an intialized value but no type, its type is inferred and the type cannot be reassigned.
var b = 20;
// b = true; type error 
var multiType;
multiType = 20;
multiType = true;
