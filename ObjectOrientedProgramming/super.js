class Employee {
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
    requestCoffee(x) {
        console.log(`Programmer requested ${x} coffee`);
    }
    requestLeave(leaves) {
        super.requestLeave(leaves);
        console.log(`One extra is granted`)
    }
}

let emp = new Employee();
emp.login();
emp.requestLeave(5)

let pro = new Programmer();
pro.requestLeave(5)