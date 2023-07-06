function init() {
    var name = "Abhishek"
    function displayName() {
        console.log(name);
    }

    name = "Mozilla"
    return displayName;
} 
let c = init()
c()