/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will convert a 
*        string containing a binary number into a number :
*        (base 10 or decimal) ? 
*/

var convert = (inputBinary) =>{
    return parseInt(inputBinary, 2);
}

console.log("\n1010 in decimal is " + convert("1010"));
console.log("1011 in decimal is " + convert("1011"));
console.log("0011 in decimal is " + convert("0011"));
console.log("11010 in decimal is " + convert("11010"));
console.log("10101010 in decimal is " + convert("10101010"));