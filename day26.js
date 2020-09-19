/*
*Author : Tenison Osei-Owusu
*File :  Create a function that converts 
*        a string to an array of characters
*/

var  stringArray = (inputText) => {
    let result = inputText.split("");

    return result;
}

console.log(stringArray("nice bag"));
console.log(stringArray("big shoes"));
console.log(stringArray("sleep is good"));