let p1 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}
let p2 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    })
}
let p3 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    })
}


const anything = async() => {
    console.time('run');
    let a = await p1()
    let b = await p2()
    let c = await p3()
    console.timeEnd('run');
    console.log(a, b, c);
}

const port = async () => {
    console.time('run1');
    let [a, b, c] = await Promise.all([p1(), p2(), p3()]);
    console.timeEnd('run1');
    console.log(a, b, c);
};
anything()

port()