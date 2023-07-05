class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running")
    }
    shout() {
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana")
    }
    hide() {
        console.log(this.name + " is hiding")
    }
}

let ani = new Animal("Bruno", "Black")
let mon = new Monkey("Jackie", "Brown")

ani.run()
mon.eatBanana()
mon.hide()
// ani.hide() // This will give error as hide() is not defined in Animal class