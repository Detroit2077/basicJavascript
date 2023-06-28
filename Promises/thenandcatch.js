let p1 = new Promise((resolve, reject) => {
    console.log(`Promise is pending`);
    setTimeout(() => {
        // console.log(`I am in a promise and I am fullfilled`);
        resolve(true);
    }, 4000);
}
)
let p2 = new Promise((resolve, reject) => {
    console.log(`Promise is pending`);
    setTimeout(() => {
        // console.log(`I am in a promise and I am rejected`);
        reject(new Error('I am an error'))
    }, 4000);
})

// console.log(p1);
// console.log(p2);

p1.then((value) => {
    console.log(value);
})

// p2.catch((error) => {
//     console.log(error);
// })

p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})

// let promise = Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Done')
//     }, 2000)
// })

// promise.then(alert)