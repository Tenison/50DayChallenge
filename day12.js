/*
*Author : Tenison Osei-Owusu
*File :  Find the maximum or largest number in an array of numbers ?
*/

var inputArray = [15,25,35,45,60,50,10];

// using ES5 and below
// var result = inputArray.reduce(function(previousValue, currentValue){ 
//      return previousValue = (currentValue > previousValue ? currentValue : previousValue);
// });

//using ES6 function syntex 
var result = inputArray.reduce((previousValue, currentValue) => { 
    //previousValue starts at 0. 
    //also known sometimes as total depending how it is used
    return previousValue = (currentValue > previousValue ? currentValue : previousValue);
});

console.log(`\n The largest number in [${inputArray}] is [${result}]`);