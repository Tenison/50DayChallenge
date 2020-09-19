/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will convert a string
*        in an array containing the ASCII codes of each character ?
*/

var  ASCIIcodes = (inputText) => {
    let result = inputText.split("").map((value) => {
        return value  + " = " + value.charCodeAt(0);
    });

    return result;
}

console.log("\n ASCII decimal code for each character : \n");
console.log(ASCIIcodes("may"));
console.log(ASCIIcodes("shoes"));
console.log(ASCIIcodes("osei"));