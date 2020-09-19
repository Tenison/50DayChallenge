/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will capitalize 
*        the first letter of each word in a text ?
*/
var data;

var textLength = (inputText) => {
    let temp = inputText.split(" ").map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    });

    return temp.join(" ");
}

//Examples = CONVERT FIRST LETTERS TO CAPS
console.log(`\n 1) ${textLength("sleep wai")} `);
console.log(`\n 2) ${textLength("you look perfect")} `);



