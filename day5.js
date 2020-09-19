/*
*Author : Tenison Osei-Owusu
*File : Calculate 10!
*/
var result = 1;
var outputFormat = "10! = ";


for(i = 10; i >= 1; i--){
    //formatting the output String
    i === 10 ? outputFormat += "10" : outputFormat += ' x ' + i;

    result *= i;
}

console.log("\n" +outputFormat + ' = ' + result);