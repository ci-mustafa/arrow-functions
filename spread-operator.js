/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
// The second array is not acually a copy of the first
// It is a new variable that points to the same object as the other variable
let arr2 = arr1;
arr2.push(4);

console.log("First array: ", arr1);
console.log("Second array: ", arr2);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7)

console.log("Third array: ", arr3);
console.log("Fourth array: ", arr4);

// Copying an object
let obj1 = {a:1, b:2, c:3}
let obj2 = {...obj1, d:4}
obj2["e"] = 5;
console.log("First object: ", obj1);
console.log("Second object: ", obj2);
