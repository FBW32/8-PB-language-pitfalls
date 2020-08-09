
//  1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?

// Check if "hello" is NaN.
console.log(isNaN("Hello")); //true

// Check if 3 is NaN.
console.log(isNaN(3)); //false
// What is the type of NaN?
// NaN is Not a Number

// 2. Rounding
console.log(0.1 * 0.2);
// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
let result1 = (0.1 * 0.2);
console.log(result1.toPrecision(1));

// 3. Infinity
// Divide Infinity by 0.
console.log(Infinity / 0); //Infinity

// Divide Infinity by Infinity.
console.log(Infinity / Infinity); //NAN

// Divide 1 by 0.
console.log(1 / 0); //Infinity