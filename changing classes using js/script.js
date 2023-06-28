let first = document.getElementById("first")
console.log(first);

first.className = "red text-black"

console.log(first.classList);
first.classList.remove('red')
first.classList.add('red')

first.classList.toggle('green')

console.log(first.classList.contains('red'));