/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will Reverse a string ?
*/

// Input should be an String.

var reverseString = (input) => {
    return input.split("").reverse().join("");
}

//Examples
console.log(' Examples');
console.log(" - " +reverseString("hello"));
console.log(" - " +reverseString("osei"));
console.log(" - " +reverseString("free"));
console.log("-----Palindromes-----");
console.log("\t" + reverseString("anna"));
console.log("\t" + reverseString("madam"));
console.log("\t" + reverseString("tenet"));