class Employee {
    constructor(name) {
        console.log(`Employee ${name} constructor called`);
    }
    login() {
        console.log('Employee login');
    }
    logout() {
        console.log('Employee logout');
    }
    requestLeave(leaves) {
        console.log(`Employee requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    // constructor() {
    //     super(); // This will call the constructor of parent class
    // }
    constructor(name) {
        super(name); // This will call the constructor of parent class
        console.log(`Programmer ${name} constructor called`);
        
    }
    requestCoffee(x) {
        console.log(`Programmer requested ${x} coffee`);
    }
    requestLeave(leaves) {
        super.requestLeave(leaves);
        console.log(`One extra is granted`)
    }
}

// let emp = new Employee();
// emp.login();
// emp.requestLeave(5)

let pro = new Programmer();
pro.requestLeave(5)