// **************Exercise 8**************

// #### 1. NaN
// **Question: Comment your answer in your js file**: What does NaN stand for?
// * Check if `"hello"` is NaN.
// * Check if `3` is NaN.
// * What is the type of NaN?

// Question 1: NaN stands for a value that's not a number.

console.log("hello" - 2); // NaN
console.log(3 - 2); // 1
// 3 is a number, so it's not NaN.

console.log(typeof NaN); // number
// The type of NaN is number.

// #### 2. Rounding
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`.
// Use a method to make sure that only `0.02` is printed.

let resultQ2 = 0.1 * 0.2;
console.log(resultQ2); // 0.020000000000000004
console.log(resultQ2.toPrecision(1)); // 0.02

// #### 3. Infinity
// * Divide Infinity by `0`.
// * Divide Infinity by Infinity.
// * Divide `1` by `0`.

console.log(Infinity / 0); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(1 / 0); // Infinity
