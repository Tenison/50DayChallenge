/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will Reverse an array ?
*/

// Input should be an array.

var reverseArray = (input) => {

    return input.reverse();
}

//Example [21,'Cat', 44, 10, 'Osei']

let inputArray = [21,'Cat', 44, 10, 'Osei'];

console.log(`\n New array is [` + reverseArray(inputArray) + `]`);