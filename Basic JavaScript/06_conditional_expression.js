const prompt = require('prompt-sync')();

let a = prompt("Enter your age: "); //Converting the string into a number
a = parseInt(a);
console.log(typeof a);
console.log(a)
if(a<9) {
    console.log("You are even allowed to touch a vehicle");
}
else if(a>9 && a<18) {
    console.log("You are not licensed to drive")
}
else {
    console.log("You are allowed to Drive")
}