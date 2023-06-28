let str = 'Please give me $1000'
let amount = Number.parseInt(str.slice("Please give me $".length))

console.log(amount);