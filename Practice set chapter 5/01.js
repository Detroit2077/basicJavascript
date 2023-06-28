const prompt = require('prompt-sync')();
let num = [12, 34, 5, 7, 8, 90];
let a = parseInt(prompt('Enter a number: '));

num.push(a);
console.log(num);