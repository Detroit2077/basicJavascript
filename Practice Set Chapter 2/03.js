const prompt = require('prompt-sync')();
const a = parseInt(prompt('Enter a number: '))

if(a%2==0 && a%3==0) {
    console.log('The number is divisible by 2 and 3');
}
else {
    console.log('The number is not divisible by 2 and 3');
}