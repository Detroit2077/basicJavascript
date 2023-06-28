// synchronous programming

const prompt = require('prompt-sync')();
// let a = prompt(`What's you name?`)
// let b = prompt(`What's you age?`)
// let c = prompt(`What's your favourite color?`)


// console.log(`${a} is ${b} year old and has ${c} as favourite color`);

// Asynchronous programming

console.log(`Start`);
setTimeout( function() {
    console.log(`Hey i am good`);
}, 3000)
console.log(`End`);