/*
*Author : Tenison Osei-Owusu
*File :  Implement the bubble sort 
*        algorithm for an array of numbers ? 
*/

let sortChecker;

var bubbleSort = (input) => {
    do{
        sortChecker = false;
        for (i = 0; i < (input.length-1); i++) {
            if (input[i] > input[i+1]) {
                let temp = input[i];
                input[i] = input[i+1];
                input[i+1] = temp;
                sortChecker  = true;
            }
        }
    }while(sortChecker);

    return input;
}
// sorting numbers
console.log(bubbleSort([2,6,4,3,70,21,34,567,1,0,56,10]));