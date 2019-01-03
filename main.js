"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// can add type checking for arguments and can specify the return type with a colon after the arguments 
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// optional parameters 
// add a question mark after the parameter. optional parameters must come after required parameters
function addMore(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
addMore(4);
// default parameters
function addExpected(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
addExpected(5, 10);
addExpected(5);
// an object as a type 
function fullestName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Mandy'
};
fullestName(p);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.name);
    };
    return Employee;
}());
var employee1 = new Employee('Lars');
console.log(employee1.name);
employee1.greet();
// inheritance 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Kelly');
manager1.greet();
manager1.delegateWork();
console.log(manager1.name);
