/*
*Author : Tenison Osei-Owusu
*File :  Write a program to separate odd and even numbers?
*/
var oddNumbers = [];
var evenNumbers= [];

var oddEven = (input) => {
    input.forEach(element => {
        element % 2 == 0 ? evenNumbers.push(element) : oddNumbers.push(element);
    });
}

//example
NumberSet = [3,7,8,9,11,14,17,28,22,28,31,34,50,79,101,104,106,111,121,180];
//TEST HERE
oddEven(NumberSet);
//Output
console.log("\n Even Numbers = " + evenNumbers);
console.log("\n Odd Numbers = " + oddNumbers);