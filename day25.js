/*
*Author : Tenison Osei-Owusu
*File :  Create a function that converts
*        a CSV text into a "bi-dimensional" array?
*/

let input = '{corolla, model s}{honda, civic}{Golf, GTI}';

var  bidimensional = (inputText) => {
    return inputText.split("}").map((value) => {
        value = value.slice(1)

        return value.split(",");
    });
}

console.table(bidimensional(input));