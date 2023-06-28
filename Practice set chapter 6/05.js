const prompt = require('prompt-sync')();

let arr = [`rock`, `scissor`, `paper`];

const randomarr = (Math.floor(Math.random() * arr.length));

const rps = arr[randomarr];


let a = prompt("What do you want to choose: ");

if (a === 'rock') {
    console.log(`Computer choose:`, rps);
    if (rps === 'rock') {
        console.log('Tie');
    }
    else if (rps === 'scissor') {
        console.log('You win');
    }
    else {
        console.log('You lose');
    }
}
else if (a === 'scissor') {
    console.log(`Computer choose:`, rps);
    if (rps === 'scissor') {
        console.log('Tie');
    }
    else if (rps === 'paper') {
        console.log('You win');
    }
    else {
        console.log('You lose');
    }
}
else if (a === 'paper') {
    console.log(`Computer choose:`, rps);
    if (rps === 'paper') {
        console.log('Tie');
    }
    else if (rps === 'rock') {
        console.log('You lose');
    }
    else {
        console.log('You win');
    }
}