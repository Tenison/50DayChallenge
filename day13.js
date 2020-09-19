/*
*Author : Tenison Osei-Owusu
*File :  Print the first 10 Fibonacci numbers without recursion ?
*/

let fibNumbers = [0];

while(fibNumbers.length !== 10){
    if(fibNumbers.length === 1){
        fibNumbers.push(parseInt(1));
    }else{
        let lastNumber = fibNumbers[fibNumbers.length -1];
        let lastButOne = fibNumbers[fibNumbers.length - 2];
        let nextFibonacciNumber = lastButOne +lastNumber;

        fibNumbers.push(parseInt(nextFibonacciNumber));
    } 
}

console.log(`\n First 10 Fibonacci numbers [${fibNumbers}]`);