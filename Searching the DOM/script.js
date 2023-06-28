let something = document.getElementsByClassName("card-title")[0]
something.style.color = "red"

let ctitiles = document.querySelectorAll(".card-title")
ctitiles[0].style.color = "blue"
ctitiles[1].style.color = "green"
ctitiles[2].style.color = "red"
console.log(ctitiles);

console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByName("viewport"));