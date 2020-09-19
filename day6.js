/*
*Author : Tenison Osei-Owusu
*File : Calculate 10!
*/

var result = 0;
var outputFormat = " ";


for(i = 0; i < 30; i++){
    if(i > 10 && i % 2 == 0){
       //formatting the output String
        i === 12 ? outputFormat += "" + i : outputFormat += ' + ' + i; 
        result += i;
    }
}

console.log("\n" + outputFormat + " = " + result);