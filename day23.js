/*
*Author : Tenison Osei-Owusu
*File :  Calculate the sum of numbers 
*        received in a comma delimited string ?
*/
var sum = 0;

var commaDelimit = (inputArray) => {  
    return inputArray.split(',').map((value) => {
        let currentNum = isNaN(parseInt(value)) ? 0 : parseInt(value);
        sum += currentNum;
        return currentNum;
    });
}

//Examples 
console.log(`\n The sum of [${commaDelimit("1,2,3,4,57,7,Cars,me")}] is ${sum}`);


