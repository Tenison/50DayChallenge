/*
*Author : Tenison Osei-Owusu
*File : Sum of numbers from 1 to 10
*/

var total = 0;

for(i = 1; i <= 10; i++){
    console.log(`${total} + ${i} = ${total +i}`);
    total += i;
}

console.log(`Sum result = ${total}`);