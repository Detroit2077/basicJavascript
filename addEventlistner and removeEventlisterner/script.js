btn = document.getElementById('btn')

// console.log(btn);
let x = function(e) {
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    // alert("Hello world!")
}
// let y = function(e) {
//     alert("Heelo world2!")
// }
btn.addEventListener('click', x)

// btn.addEventListener('click', y)

let a = prompt("Enter your favourite number:");
if (a == 2) {
    btn.removeEventListener('click', x) 
}