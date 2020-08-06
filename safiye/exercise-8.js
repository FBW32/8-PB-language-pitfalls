//1
//*NaN is for undefinable mathematical expressions.
//*"hello" is just a sting not a NaN
console.log(typeof "hello");
//*3 is a number not a NaN
console.log(typeof 3); //number
console.log(typeof NaN);
//*type of NaN is number

//2
let wholeNum = 0.1 * 0.2;
console.log(wholeNum);
roundedNum = wholeNum.toFixed(2);
console.log(roundedNum);
//3
console.log(Infinity / 0); //infinity
console.log(Infinity / Infinity); //NaN
console.log(1 / 0); //Infinity
