/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will find 
*        the nth Fibonacci number using recursion ?
*/
fibNumbers = [];

var fibFunction = (input) =>{
    if(input === 0) return 0;

    if(input === 1) return 1;

    return fibFunction(input - 1) + fibFunction(input - 2);
}

function fibSeries(input){
    for(;input > 0;input--){
        fibNumbers.push(fibFunction(input));
    }
    fibNumbers.pop();
    fibNumbers.reverse();
}

//This is our main execution
fibSeries(6);

console.log(`\n the First ${fibNumbers.length} Fibonacci numbers  are [${fibNumbers}]`);

