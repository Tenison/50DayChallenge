/*  Author : Tenison Osei-Owusu
*   File   : Create a function to 
*            Build a Staircase using #?
*/

var stairCase = (chr, stairCaseNumber) => {
    let stairs = "";
    for(i = 0; i < stairCaseNumber;i++) {
        stairs += chr + chr;
        console.log(stairs)
    }
} 

// Let's test 
stairCase("=", 17);
