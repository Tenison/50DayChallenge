/*
*Author : Tenison Osei-Owusu
*File :  Create a function to return the 
*        longest word in a string ?
*/

var words = (inputSentence) => {
    let holdwords = inputSentence.split(" ");

    let wordSizes = holdwords.map((value) =>{
        return value.length;
    });

    let largest = Math.max(...wordSizes);
    largest = wordSizes.indexOf(largest);

    return holdwords[largest];
}

console.log("\nlargest is :: " + words("The boy is going to school"));
console.log("largest is :: " + words("He doesn't like schooling"));
console.log("largest is :: " + words("coding challenge is still on"));
console.log("largest is :: " + words("hard work doesn't break bones"));
