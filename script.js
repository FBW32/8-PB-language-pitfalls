/* Check if "hello" is NaN. */
let hello = "hello";
console.log(typeof hello); // string

/* Check if 3 is NaN.
 */
let tree = 3;
console.log(typeof tree); // number

/* What is the type of NaN?
 */
/* NaN is nothing, empty, unknown Value; */

/* 2. Rounding
 */

console.log(0.1 * 0.2); // 0.020000000000000004
console.log(Math.round(0.1 * 0.2)); // 0

/* Divide Infinity by 0. */
console.log(Infinity / 0); // Infinity

/* Divide Infinity by Infinity.
 */
console.log(Infinity / Infinity); // NaN

/* Divide 1 by 0. */
console.log(1 / 0); // Infinity
