/*  Author : Tenison Osei-Owusu
*   File   : Osei's provision store
*/

const fetch = require('node-fetch');
var URL = 'https://my-json-server.typicode.com/Tenison/jsonData/db';

const getData = async (url) => {
    const response = await fetch(url);
    let json = await response.json();
    return json;  
};

getData(URL).then((data) => {
    console.log(data.codingChallenge);
}).catch((err) => {
    console.error(err);
});

// getData(URL).then(
//     (res) => {
//         /// set view value to display what you need !!!
//         console.log("Items in the store");
//         res.forEach(element => {
//             console.log(`\n ${element.item} is ${element.price}`);
//         });
//     }
// );


