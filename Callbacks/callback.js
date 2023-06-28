function loadscript(src, callback) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    // script.src = src;
    script.onload = () => {
        console.log("Loaded script with SRC:", src);
        callback(null, src);
    }
    script.onerror = () => {
        console.log(`Error script with SRC:`, src);
        callback(new Error("SRC got some error"), src)
    } 
    document.body.appendChild(script);
}

const hello = (error, src) => {
    if (error) {
        console.log(error);
        return
    }
    alert('Hello world ' + src)
}

const goodmorning = (error, src) => {
    alert('Good morning ' + src)
}

loadscript('https://cdn.jsdefasdlivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',hello) 