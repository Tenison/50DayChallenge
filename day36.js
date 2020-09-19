/*  Author : Tenison Osei-Owusu
*   File   : Write a program to display the 
*            reading status of each book ?
*/
var library = [
    {  
        author: 'Bill Gates', 
        title: 'The Road Ahead',
        readingStatus: '46%'
    },{
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: false,
    },{
        author: 'Suzanne Collins',
        title: 'Hunger Games', 
        readingStatus: '78%'
}];

var func = (lib) =>{
    lib.forEach(element => {
        console.log("\n" + element.title + " = " + element.readingStatus);
    });
}

//lets Test
func(library);
