console.log(document.cookie);
document.cookie = "name = abhishek3400"
document.cookie = "name2 = abhishek340"
console.log(document.cookie);
let key = prompt("enter  your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);