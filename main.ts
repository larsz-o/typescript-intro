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

// multi-line variable with embedded values. must use backticks. line break displays in console.
let sentence: string = `My name is ${name}.
I have written ${total} program(s) in TypeScript. 
I am a beginner: ${isBeginner}`; 
console.log(sentence);