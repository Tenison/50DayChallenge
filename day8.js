/*
*Author : Tenison Osei-Owusu
*File : Create a function that will convert 
*        from Celsius to Fahrenheit ?
*        Formula : *C = (*F - 32) x (9/5)
*                  *C = (*F - 32) X 1.8
*/
var result = function(temp){
    let convert = (temp - 32.0) / (1.8);
    return `${temp} fahrenheit in degrees celsius  is ${convert}`;
}

/// example :
console.log("\n" + result(100));