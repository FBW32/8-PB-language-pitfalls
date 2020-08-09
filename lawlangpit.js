// 1. NaN

// NaN: not a Number

let myNum = 10;
console.log(myNum -"hello"); // NaN
console.log(myNum *3);   // 30

// 2. Rounding 

console.log(0.1 * 0.2);  //0.020000000000000004

let numObj = 0.020000000000000004;
console.log(numObj.toFixed(2)); // 0.02


//.3 Infinity

console.log(Infinity / 0);  // Infinity

console.log(Infinity / Infinity);  // NaN

console.log(1 / 0);   // Infinity

