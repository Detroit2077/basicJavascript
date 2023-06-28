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
        callback(new Error("SRC got some error"))
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

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',function goodmorning (error, src) {
    if (error) {
        console.log(error);
        sendEmergencyMsgToCEO();
        return
    }
    loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',function goodmorning (error, src) {
        if (error) {
        console.log(error);
        sendEmergencyMsgToCEO();
        return
        }
        loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap2.bundle.min.js',function goodmorning (error, src) {
            if (error) {
            console.log(error);
            sendEmergencyMsgToCEO();
            return
            }
            loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap3.bundle.min.js',function goodmorning (error, src) {
                if (error) {
                console.log(error);
                sendEmergencyMsgToCEO();
                return
                }
                loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap4.bundle.min.js',function goodmorning (error, src) {
                    if (error) {
                    console.log(error);
                    sendEmergencyMsgToCEO();
                    return
                    }
                    loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap5.bundle.min.js',function goodmorning (error, src) {
                        if (error) {
                        console.log(error);
                        sendEmergencyMsgToCEO();
                        return
                        }
                        loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap6.bundle.min.js',function goodmorning (error, src) {
                            if (error) {
                            console.log(error);
                            sendEmergencyMsgToCEO();
                            return
                            }
                            loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap7.bundle.min.js',function goodmorning (error, src) {
                                if (error) {
                                console.log(error);
                                sendEmergencyMsgToCEO();
                                return
                                }
                                loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap8.bundle.min.js',function goodmorning (error, src) {
                                    if (error) {
                                    console.log(error);
                                    sendEmergencyMsgToCEO();
                                    return
                                    }
                                    loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap9.bundle.min.js',function goodmorning (error, src) {
                                        if (error) {
                                        console.log(error);
                                        sendEmergencyMsgToCEO();
                                        return
                                        }
})
})
})
})
})
})
})
})
})
})
