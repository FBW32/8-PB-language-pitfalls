//  Pitfalls 

// 1. NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN 
// NaN: not a number


let hi = "hello"
console.log(typeof hi); // string

//number

//string + number =NaN

console.log(hi - 3);// in this case don't need the typeof to check the variable type.

// 2. Rounding 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//Math.round()

// https://thisinterestsme.com/javascript-round-decimal-places/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//function --> transform an argument into a string and returns a floating point number with the Standard built-in objects - parseFloat() and than apply return().toFixed to it. 

let num = 0.1 * 0.2;
console.log(num);
console.log(Math.round(num)); //0

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}
console.log(number_format(num, 2)); // 0.02


// 3. Infinity
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
// * Divide Infinity by `0`. 
console.log(Infinity / 0); // Infinity
// * Divide Infinity by Infinity. 
console.log(Infinity / Infinity); // NaN
// * Divide `1` by `0`.
console.log(1 / 0); // Infinity
