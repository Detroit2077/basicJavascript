const prompt = require('prompt-sync')();
const a = parseInt(prompt(`Enter the number you wanted:`));
let b = 0;
do {
    b = parseInt(prompt('Enter a number: '));
    if(a===b) {
        console.log('The number you entered matches');
    }
    else if(a!==b) {
        console.log('The number you entered is wrong please try again');
    }
} while (a!==b);