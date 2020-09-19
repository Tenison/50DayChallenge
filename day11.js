/*
*Author : Tenison Osei-Owusu
*File :  Create a function that receives an array 
*        of numbers as argument and returns an array 
*        containing only the positive numbers ?
*/

var inputArray = [15,-25,-35,-45,60,-50,40];

var newArray = inputArray.map((value) => {
    return Math.abs(value);
});

console.log(`\n The positive value for [${inputArray}] is [${newArray}]`);