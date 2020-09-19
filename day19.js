/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will receive two arrays of 
*        numbers as arguments and return an array composed 
*        of all the numbers that are either in the first array
*        or second array but not in both
*/
var totalArray= [];
let checker = true;

function checkfunction(first, second) {
    return first.forEach((firstArrayValue) =>{  
        second.forEach((secondArrayValue) => {
            if(secondArrayValue === firstArrayValue)
                checker = false;
        }, firstArrayValue);
        if(checker)
            totalArray.push(firstArrayValue);
        checker = true;
    },second);
}

/// function arguements should be array values.
var compositeFunction = (inputOne, inputTwo) => {
    checkfunction(inputOne, inputTwo);
    checkfunction(inputTwo, inputOne);

    return totalArray;
}
///Let take the odd ones out
console.log("Result is " + compositeFunction([1,2,3,4,5,6,7,8,9,10],[1,3,5,7,9]));