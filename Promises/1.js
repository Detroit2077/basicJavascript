let promise = new Promise(function(resolve, reject) {
    console.log('hello');
    resolve(56);
})

console.log("hello One");
setTimeout(() => {
    console.log(`hello Two`);
}, 2000);

console.log(`Hello three`);
console.log(promise); 