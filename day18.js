/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will merge two arrays 
*        and return the result as a new array ?
*/

//ArrayFunction
var mergeArrays = (first, second) => {
    return first.concat(second);
}

//Examples
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10, "Haha"];

console.log(`\n New array is [` + mergeArrays(firstArray, secondArray) + `]`);
