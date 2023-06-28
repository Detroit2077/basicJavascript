let first = document.getElementById('first')
console.log(first);

console.log(first.getAttribute("class"))
console.log(first.getAttribute("id"))

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

first.setAttribute("hidden", "true")
first.setAttribute("class", "sachin bhai")

first.removeAttribute("class")
console.log(first.attributes);

console.log(first.dataset);
console.log(first.dataset.game)
console.log(first.dataset.valo)