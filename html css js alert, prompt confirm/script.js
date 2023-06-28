alert(`something has to be done`);

let a = prompt('Enter a number:', '456');
document.write(a);

let write = confirm("Do you want to get your data stealed!")

if(write) {
    document.write(`Thank you`)
}
else {
    document.write("Your fool what you thougt before pressing cancel! get stealed");
}