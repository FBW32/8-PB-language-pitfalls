/* 1. NaN
Question: Comment your answer in your js file: What does NaN stand for?*/ 
// NaN stands for Not a Number.


// Check if "hello" is NaN.

console.log(isNaN("hello")); // true
console.log("hello" + " " + "is a NaN"); // hello is a NaN



// Check if 3 is NaN.

console.log(isNaN(3)); // false
console.log(3 + " is not a NaN"); // 3 is not a NaN



// Question: What is the type of NaN? 
// Answer: The type of a NaN is Number


// 2. Rounding

// The above in JavaScript will print: 0.020000000000000004.
// Use a method to make sure that only 0.02 is printed.  

console.log(0.1 * 0.2);
let result = 0.020000000000000004;
console.log(result.toFixed(2)); // 0.02


// 3. Infinity

//Divide Infinity by 0.

console.log(Infinity / 0); // Infinity 

// Divide Infinity by Infinity.

console.log(Infinity / Infinity); // NaN

// Divide 1 by 0. 

console.log(1 / 0);  // Infinity 