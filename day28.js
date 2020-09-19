/*
*Author : Tenison Osei-Owusu
*File :  Implement the Caesar cypher
*        in any programming language
*/

const myCaesarCypherFactor = 5;
 
var  encryptCaesarCypher = (inputText) => {
    let result = inputText.split("").map((value) => {
        return String.fromCharCode(value.charCodeAt(0) + myCaesarCypherFactor);
    });

    return result.join("");
}

//encrypt data
console.log("\n" + encryptCaesarCypher("love don't cost a thing"));





// Let decrypt the data
// Can build a chatapp with this
var  decryptCaesarCypher = (inputText) => {
    let result = inputText.split("").map((value) => {
        return String.fromCharCode(value.charCodeAt(0) - myCaesarCypherFactor);
    });

    return result.join("");
}

console.log("\n" +  decryptCaesarCypher("qt{j%its,y%htxy%f%ymnsl"));