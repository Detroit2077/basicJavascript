const prompt = require('prompt-sync')();
const getRandom = () => {
    return Math.floor(Math.random() * 101)
}
b = getRandom();
// console.log();
let a;
var count = 0;
do {
    a = parseInt(prompt("Guess the number: "));
    if(b==a) {
        console.log(`You guessed the right answer`);
        count++;
    }
    else if(b>a) {
        console.log(`Your guess was lower`);
        count++;
    }
    else {
        console.log(`Your guess was higher`);
        count++;
    }
}while(a>b || a<b);
 
console.log(`The total chances taken to guess the right answer was ${count}`);