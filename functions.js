/* 
Types of Functions:
- function declaration
- function expression
- anonymous funcction
*/

declaration();

// Function declaration: are hoisted, run when we call them (invoke)
function declaration() {
    console.log("I'm a Function Declaration.");
}

//expression(); <-- errors out (can't be hoisted as explained before)

// Function expression: are NOT hoisted. And are stored in a variable.
// We use the variable name to run the function
const expression = function() { // <--- an example of an anonymous functionw
    console.log("I'm a function expression.");
}

//Function Declaration as well
function myName(name) {
    console.log(`My name is ${name}`);
}

myName("Kate");