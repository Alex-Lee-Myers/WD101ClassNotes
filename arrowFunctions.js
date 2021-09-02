/*
Also, called Fat Arrow Functions
- They are NOT (function) declarations
- Do NOT get hoisted
- Two Types:
    - Concise Body --> Return is automatic
    - Block Body -->

- A concise way to write function expressions
*/

// CONCISE BODY
//speak('dog';) <--- example to show it is not hoisted.
speak(`dog`);
let speak = (name) => console.log(`The ${name} goes woof!`);

speak(`dog`);

let firstName = "Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName);

//  BLOCK BODY
// Use {curly bros} to contain the logic
let speakAgain = name => {
    console.log(`The ${name} goes woof! - Line 27 Console.log`);
}

speakAgain(`dog`);

let concat = (first, last) => {
    return `${first} ${last}`
}

//---------------------------------

let newFullName = concat(firstName, lastName);
console.log(newFullName);

let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);
console.log(returnedValue);