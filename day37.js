/*  Author : Tenison Osei-Owusu
*   File   : Create a program to print the 
*            item prices and stock from the JSON endpoint ?
*/

const fetch = require('node-fetch');

var URL = 'https://my-json-server.typicode.com/Tenison/jsonData/db';

var jsonEndpoint = (link) => {
    let result;
    fetch(link).then(res => res.json())
    .then(temp => {
        console.log(temp.codingChallenge);
    });
}

jsonEndpoint(URL);