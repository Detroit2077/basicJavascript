const prompt = require('prompt-sync')();
let arr  = [1, 4, 56, 97, 57, 70];
let a;

do {
    a = parseInt(prompt(`Enter a number: `))
    arr.push(a);
} while (a!=0);

console.log(arr);