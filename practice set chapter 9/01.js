const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.setAttribute('src', src)
        document.body.appendChild(script)
        script.onload = () => {
            resolve(3)
        }
        script.onerror = () => {
            reject(new Error('We are having some error'))
        }
    })
}

let p1 = loadscript('https://cdn.jfassdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js')
p1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})