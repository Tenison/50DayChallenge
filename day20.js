/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will receive two
*        arrays and will return an array with elements
*        that are in the first array but not in the second?
*/

// var resultantArray = (firstArray, secondArray) => {
//     secondArray.forEach((secondArrayValue) => {    
//         firstArray.forEach((firstArrayvalue, index) => {
//             if(firstArrayvalue == secondArrayValue)
//                 firstArray.splice(index, 1);
//         }, secondArrayValue)
//     });
//     return firstArray;
// }

var resultantArray = (firstArray, secondArray) => {
    firstArray.forEach((firstArrayValue, index) => {
        if(secondArray.includes(firstArrayValue))
            firstArray.splice(index, 1);
    });
    return firstArray;
}

//Learnt some lessons from yesterday.. haha
//Examples
//Let retrun values only found in firstArray but not in secondArray
console.log("\n Result is " + resultantArray([1,11,3,4,5,10,20,30], [1,11,2,3,30]));