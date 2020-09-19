/*
*Author : Tenison Osei-Owusu
*File : Create a function that will convert 
*        from Celsius to Fahrenheit ?
*        Formula : *F = (*C x (9/5)) + 32 
*                  *F = (*C X 1.8) + 32
*/
var result = function(temp){
    convert = (temp * 1.8) + 32;
    return `${temp} degrees celsius in fahrenheit is ${convert}`;
}

/// example : 100 degrees celsius convert ???
console.log(result(100));