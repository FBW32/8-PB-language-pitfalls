// 1. NaN
// Q: What does NaN stand for?
// AQ: Nan stands for "Not a Number"

// Check if "hello" is NaN.
//Number.isNaN("hello");
console.log(Number.isNaN("hello")); // false

// Check if 3 is NaN.
console.log(Number.isNaN(3)); // false

// What is the type of NaN?
console.log(typeof (NaN)); // number

// 2. Rounding 
console.log(0.1 * 0.2); // 0.020000000000000004

// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
console.log((0.1 * 0.2).toFixed(2)); // 0.02

// 3. Infinity
// Divide Infinity by 0.
console.log(Infinity / 0); // Infinity 

// Divide Infinity by Infinity.
console.log(Infinity / Infinity); // NaN

// Divide 1 by 0.
console.log(1 / 0); // Infinity 