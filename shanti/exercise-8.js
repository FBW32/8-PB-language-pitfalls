// Pitfalls
/* 1. NaN
Question: Comment your answer in your js file: What does NaN stand for?

Check if "hello" is NaN.
Check if 3 is NaN.
What is the type of NaN? */

// Nan stands for Not a Number
console.log(typeof "hello"); // string
console.log(typeof 3); // number
console.log(typeof NaN); // number
// NaN is a falsy value in JavaScript

/* 2. Rounding
console.log(0.1 * 0.2);
The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed. */

console.log((0.1 * 0.2).toFixed(2)); // 0.02

/* 3. Infinity
Divide Infinity by 0.
Divide Infinity by Infinity.
Divide 1 by 0. */

console.log(Infinity / 0); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(1 / 0); // Infinity
