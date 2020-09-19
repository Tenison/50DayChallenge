/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will return 
*        the number of words in a text ?
*/
var data;

var textLength = (inputText) => {
    data = inputText;

    return inputText.split(" ").length;
}

//Examples
console.log(`\n${textLength("sleep wai")} words can be found in "${data}"`);
console.log(`\n${textLength("motion doesn't mean progress")} words can be found in "${data}"`);
console.log(`\n${textLength("do something")} words can be found in "${data}"`);


