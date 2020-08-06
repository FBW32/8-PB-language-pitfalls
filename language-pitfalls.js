// NaN : it is a variable in global scope check the value if it is a Number or Not an Number!!
let firstWord = "Hello";
if (isNaN(firstWord)){
    console.log(firstWord + " is a Nan");
}
else{
    console.log(`${firstWord} Not a Nan`);
}

let num = 3;
if (isNaN(num)){
    console.log(`${num} is a Nan`);
}
else{
    console.log(`${num} Not a Nan`);  
}

console.log("The Type of NaN " + typeof Nan);
console.log((0.1 * 0.2).toFixed(2));
//
console.log(Infinity/0); //Infinity
console.log(Infinity/Infinity); //Nan
console.log(1/0); //Infinity


