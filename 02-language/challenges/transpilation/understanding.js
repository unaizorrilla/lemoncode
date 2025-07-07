// Question 1
// how x === x will be false always?

let x = NaN;

console.log(x === x); // false


// Question 2
// implement a function to check if a number is NaN

const isNaNValue = v => isNaN(v) && typeof v === 'number';

console.log(isNaNValue(NaN)); // true


// Question 3
// is this posible !isNaNValue(x) && x !== x  without reimplmentation of isNaNValue?
// Response is not, isnanvalue will be false, ie, will be a non nan number, and x !== x will be false, ie, x is NaN
const isNotNaN = v => !isNaNValue(v) && v !== v;

// question 4
// will be x + 1 === x - 1 true?
// Response: with the overflow of the number

let y = Infinity;
console.log(y + 1 === y - 1); // true

// question 5
// will be x > x true?
// i need copilot to solve this :-(

let zCounter = 1000;
let z = {
    valueOf: () => zCounter-=1
}

console.log(z > z); // true