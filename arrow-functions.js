/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumber(a, b) {
    return a + b;
}

// call the function
let myVanillaFunction = addTwoNumber(5, 6);
console.log(myVanillaFunction);


//-----------------------------------------------------------
// Arrow Function With Parameters
const subTwoNumber = (a, b) => {
    return a - b;
}

// call the function
let myArrowFunction = subTwoNumber(4, 6);
console.log(myArrowFunction);

//-----------------------------------------------------------
// Single Line Arrow Function With Parameters
const mulTwoNumber = (a, b) => a * b;
let singleLineArrowFunction = mulTwoNumber(3, 3)
console.log(singleLineArrowFunction);

//-----------------------------------------------------------
// Implicit Returns
const showMessage = message => console.log(message);
showMessage("this is a message!");

const sayHello = () => console.log("Hello!");
sayHello();
// Returning Multiple Lines
