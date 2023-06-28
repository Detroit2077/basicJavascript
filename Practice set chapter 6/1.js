const prompt = require('prompt-sync')();
let a = parseInt(prompt(`Enter your age: `));

console.log(`You can ${(a>=18)? `drive` :`not drive`}`);