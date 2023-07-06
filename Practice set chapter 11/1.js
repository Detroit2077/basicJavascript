class Complex {
    constructor(real, comp) {
        this.real = real
        this.comp = comp
    }
    display() {
        console.log(`${this.real}i + ${this.comp}`);
    }
}
let j = new Complex(3, 6)
let h = new Complex(4, 5)

function add (Complex, Complex) {
    return `${j.real + h.real}i+ ${j.comp + h.comp}`
}
console.log(add());
