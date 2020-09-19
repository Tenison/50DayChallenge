/*
*Author : Tenison Osei-Owusu
*File : Calculate the sum in an array of 10 numbers ?
*/

var inputArray = [1,2,3,4,5,6,7,8,9,10]

// using ES5 and below
// var result = inputArray.reduce(function(total, indexValue){ 
//     return total += indexValue;
// });

//using ES6 function syntex 
var result = inputArray.reduce((total, indexValue) => { 
    return total += indexValue;
});

console.log("\n The sum of the inputArray numbers = " + result);