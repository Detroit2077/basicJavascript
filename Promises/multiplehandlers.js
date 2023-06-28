let p1 = new Promise((resolve, reject) => {
    console.log('Hey i am not resolved');
    setTimeout(() => {
        resolve(5);
    }, 3000)
})

p1.then((value) => {
    console.log('IT IS NOW RESOLVED');
})

p1.then((value) => {
    alert(`Hurray`)
})