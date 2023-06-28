document.write("hello")

const sum = (a, b) => {
    console.log("Yes I am running" + (a + b));
}

setTimeout(sum, 5000, 1, 2)
let a = setTimeout(() => {
    alert('I am inside of setTimeout')
}, 2000);
let b = prompt("Do you want to run the settimout(y/n):");
if (b == "n") {
    clearTimeout(a);
}
// clearTimeout(a);
console.log(a); 

setInterval(() => {
    alert("hi")
}, 3000);