const prompt = require('prompt-sync')();
const a = parseInt(prompt("Enter you age: "))
console.log(typeof a);
if(a>=10 && a<=20) {
    console.log("Age is between 10 and 20");
}
else {
    console.log('No you are not');
}