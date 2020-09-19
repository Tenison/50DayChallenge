/*
*Author : Tenison Osei-Owusu
*File :  Create a function that returns 
*        an array the with words inside a text ?
*/

var  individualwords = (inputText) => {
    return inputText.split(" ").map((value) => {
        return value;
    });
}

console.log(`\nOutput : [${individualwords("motion doesn't mean progress")}]`);