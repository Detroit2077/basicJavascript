const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter a number: "));
let i = 0;
do {
    console.log(i);
    i++;
} while (i<n);