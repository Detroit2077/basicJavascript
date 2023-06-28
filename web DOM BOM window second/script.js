let b = document.body
console.log("First child of b is:", b.firstChild);
console.log("First child element of b is:", b.firstElementChild);

const changeBgRed = () => {
    b.firstElementChild.style.background = "red"
}