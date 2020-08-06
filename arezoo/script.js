// Q1

let word = `hello`;
let number = `3`;
console.log(typeof number);
console.log(typeof word);

if (isNaN(word)) {
  console.log("this is not a number");
} else {
  console.log("it is a number");
}
if (isNaN(number)) {
  console.log("this is not a number");
} else {
  console.log("it is a number");
}
console.log(typeof NaN); //Nan is number

// Q2
let rundNumber = 0.1 * 0.2;
console.log(rundNumber.toFixed(2));

// Q3
console.log(Infinity / 0);
console.log(Infinity / Infinity);
console.log(1 / 0);
