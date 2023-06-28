let a = prompt(`Enter you age: `)
if (a>=18) {
    alert(`You can drive`);
}
else if(a<0) {
    console.error(`The age cannot be negative`)
}
else {
    alert(`You cannot drive`);
}

let y = confirm(`Asking if you want to back the prompt`);
if(y) {
    let a = prompt(`Enter you age: `)
    if (a>=18) {
        alert(`You can drive`);
        document.write(a);
    }
    else if(a<0) {
        console.error(`The age cannot be negative`)
    }
    else {
        alert(`You cannot drive`);
    }
}
else {
    alert(`ok`)
}