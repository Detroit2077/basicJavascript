const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter the number of which factorial is needed:"));

let fac = 1;

for (let i = n; i > 0; i--) {
    fac = fac * i;
}

console.log(fac);