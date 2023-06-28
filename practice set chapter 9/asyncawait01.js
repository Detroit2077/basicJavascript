const loadscript = async(src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src;
        script.onload = () => {
            resolve(src +  ` link uploaded in scritp tag`)
        }
        script.onerror = () => {
            reject(new Error('some error occured'))
        }
        document.body.appendChild(script)
    })
}
const something = async() => {
    try{
        let p1 = await loadscript("https://cdn.jsdelfaivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
        console.log(p1);
    }catch(error) {
        console.log(error);
    }
}
something()