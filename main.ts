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

// can add type checking for arguments and can specify the return type with a colon after the arguments 
function add(num1: number, num2: number): number{
    return num1 + num2; 
}
add(5, 10);

// optional parameters 
// add a question mark after the parameter. optional parameters must come after required parameters
function addMore(num1: number, num2?: number): number {
    if(num2){
        return num1 + num2; 
    } else {
        return num1; 
    }
}
addMore(4); 

// default parameters
function addExpected(num1: number, num2: number = 10): number {
    return num1 + num2; 
}
addExpected(5, 10); 
addExpected(5); 


// interfaces (like classes?) reduces replicating object types 
interface Person {
    firstName: string;
    // can make properties optional here 
    lastName?: string;
}

// an object as a type 
function fullestName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Mandy',
}
fullestName(p);

// classes
class Employee {
    name: string; 

    constructor(name: string){
        this.name = name; 
    }

    greet(){
        console.log(`Good morning ${this.name}`);
    }
}

let employee1 = new Employee('Lars');
console.log(employee1.name);
employee1.greet();

// inheritance 
class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let manager1 = new Manager('Kelly');
manager1.greet();
manager1.delegateWork();
console.log(manager1.name);
