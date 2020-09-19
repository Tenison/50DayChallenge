/*
*Author : Tenison Osei-Owusu
*File : Calculate the average in an array of 10 numbers
*/

var inputArray = [15,25,35,45,60,50,40,30,20,10];

// using ES5 and below
// var result = inputArray.reduce(function(total, indexValue){ 
//     return total += indexValue;
// });

//using ES6 function syntex 
var result = inputArray.reduce((total, indexValue) => { 
    return total += indexValue;
});

let average = result / inputArray.length;

console.log(`\n The average of the inputArray numbers is ${result} / ${inputArray.length} = ${average}`);