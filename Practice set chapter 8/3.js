let container = document.getElementById('container')
console.log(container);

let a = container.firstElementChild
console.log(a);

a.addEventListener('click', function() {
    window.open('https://www.google.com', '_self')
})

let b = a.nextElementSibling

b.addEventListener('click', function() {
    window.open('https://www.youtube.com', '_self')
})

let c = b.nextElementSibling

c.addEventListener('click', function() {
    window.open('https:music.youtube.com', '_self')
})