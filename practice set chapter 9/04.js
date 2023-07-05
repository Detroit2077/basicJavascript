let something =  async() => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000);
    })

    console.time('run');
    let a = await p1;
    console.log(a);
    let b = await p2;
    console.log(b);
    let c = await p3;
    console.log(c);
    console.timeEnd('run');
    
    let promise_all =  Promise.all([p1, p2, p3])
    promise_all.then((value) => {
        console.log(value);
    })
}

something();