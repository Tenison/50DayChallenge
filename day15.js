/*
*Author : Tenison Osei-Owusu
*File :  Create a function that will return 
*        a Boolean specifying if a number is prime ?
*/


function isPrime(num) {
    if (num === 2) {
      return true;
    }else if(num > 1){
        for (var i = 2;  i < num; i++) {  
            if (num % i !== 0 )  return true;

            else if (num === i * i) return false;
    
            else return false;
        }
    }else {
        return false;
    }
}
  
console.log(isPrime(6));   //Should return false
console.log(isPrime(11));  //Should return true

