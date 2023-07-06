class Human {
    constructor (name) {
        this.name = name
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Student extends Human {
    work() {
        console.log(`${this.name} is studying`);
    }
}

let j = new Student("abhishek")
j.work()

console.log(Student instanceof Human);