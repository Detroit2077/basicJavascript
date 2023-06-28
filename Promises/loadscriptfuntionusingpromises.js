let loadscript = (src) => {
    return new Promise((resolve, reject) => {

        let script = document.createElement('script')
        script.setAttribute('src', src)
        document.body.appendChild(script);
        script.onload = () => {
            resolve(3);
        }
        script.onerror = () => {
            reject(5);
        }
    })
}

let p1 = loadscript("https://cdn.jslkdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

p1.then((value) => {
    console.log(value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js")
})/*.then((value) => {
    console.log('second script is loaded');
})*/.catch((error) => {
    console.log('we caught some error');
})