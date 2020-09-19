/*  Author : Tenison Osei-Owusu
*   File   : Write a program where the computer 
*            determines which lady it likes the most?
*/

let ladies = [
                "Jenna Ezarik", 
                "Adesua Etomi", 
                "Mercedes Scelba-Shorte", 
                "scarlett johansson"
            ];
var pc = (ladies) => {
    var x;
    do{
        x = Math.floor(Math.random() * 1000);
        console.log(x);
    }while(x > ladies.length);
    console.log(`MIT pc : I love ${ladies[x - 1]}`);
}

pc(ladies);