const prompt = require('prompt-sync')();
const a = parseInt(prompt("Enter your age:"))

console.log("You ", a>18? "can drive" : "cannot drive")