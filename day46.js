/*  Author : Tenison Osei-Owusu
*   File   : Create a program to retrieve only 
*            numbers from a list of numbers and words?
*/

var list = [3, "goals", 5, 8,"words", "corona", "in"];

var numbers = (input) => {
    return input.filter(value=> {
        return !isNaN(value);
    });
}

console.log("\nThe numbers in the list are : " + numbers(list));