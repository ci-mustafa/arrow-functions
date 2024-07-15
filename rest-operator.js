/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum one: ", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum two: ", sum2);

// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    // ...rest is an array inside the function
    for(let i of rest){
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6, 7, 8);
console.log(sum3);

