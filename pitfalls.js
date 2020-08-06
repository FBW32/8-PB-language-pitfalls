//
// 1. NaN
//
// Question: Comment your answer in your js file: What does NaN stand for?
// NaN stands for "Not a Number", which identifies if the value is not a number, i.e. could be a string.

// Check if "hello" is NaN.

console.log(typeof "hello");
// hello is unidentified

// Check if 3 is NaN.

console.log(typeof 3);
// 3 is a number, and not a NaN

// What is the type of NaN?

console.log(typeof NaN);
// NaN is allocated the type "number"


//
//
// 2. ROUNDING
//

console.log(0.1 * 0.2);

// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.

let number1 = .020000000000000004;
console.log(number1 = (Math.round(number1 * 100) / 100).toFixed(2));
//0.02


//
//
// 3. INFINITY
//
// Divide Infinity by 0.

console.log(Infinity / 0);
// Infinity

// Divide Infinity by Infinity.

console.log(Infinity / Infinity);
// NaN

// Divide 1 by 0.

console.log(1 / 0);
// (Another) Infinity --> to infinity and beyond!