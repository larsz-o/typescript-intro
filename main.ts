export {}

let message = 'Welcome Back!'; 
console.log(message); 

// variable declarations
let x = 10; 
// const variables must always be declared with a value (because they can't be reassigned)
const y = 20; 

// variable types 

let isBeginner: boolean = true; 
let total: number = 1; 
let name: string = 'Lars'; 
// VSCode will only recommend methods that correspond with each type -- e.g. concat for strings
let fullName: string = name.concat(' Mackenzie'); 

// multi-line variable with embedded values. must use backticks. line break displays in console.
let sentence: string = `My name is ${fullName}.
I have written ${total} program(s) in TypeScript. 
I am a beginner: ${isBeginner}`; 
console.log(sentence);


let n: null = null;
let u: undefined = undefined; 

// null & undefined are subtypes of all types 
let isNew: boolean = null;
let myName: string = undefined; 

// both declare an array of numbers. either syntax is fine
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple -- allows for two types within one array 
// order of values has to match order and quantity of types.
let person1: [string, number] = ['Chris', 22]; 

enum Color {Red, Green, Blue}; 
let c: Color = Color.Green; 
console.log(c);

// any type can be reassigned -- good to use if you're relying upon user input 
let randomValue: any = 10; 
randomValue = true; 
randomValue = 'hi'; 

// this function checks to see if an object has a name and returns the name if it does 
function hasName(obj: any): obj is { name: string } { 
    return !!obj && 
        typeof obj === "object" && 
        "name" in obj
}

let myVariable: unknown = 10; 
myVariable = {name: 'Reed'}
myVariable = {age: 8}
if (hasName(myVariable)){
    console.log(myVariable.name); 
}

// type inference 
// if a variable is declared without an initialized value, it can be redeclared to new types without problem. 
let a; 
a = 10; 
a = true; 

// if a variable is declared with an intialized value but no type, its type is inferred and the type cannot be reassigned.
let b = 20; 
// b = true; type error 

let multiType: number | boolean; 
multiType = 20; 
multiType = true; 