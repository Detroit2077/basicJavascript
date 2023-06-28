let a = document.body.getElementsByTagName('div')[0]
console.log(a);

// a.innerHTML = a.innerHTML + "<div>Hello world</div>"

let y = document.createElement('div')
y.innerHTML = "<h1>HELLO WORLD</h1>"
a.append(y)
a.prepend(y)
a.before(y)
a.after(y)

a.replaceWith(y)