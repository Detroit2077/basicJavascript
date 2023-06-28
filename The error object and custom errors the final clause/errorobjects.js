// try{
//     console.log(abhishek);
// }
// catch(error) {
//     console.log(error.name);
//     console.log(error.message);
// }
// ?Custom error
// try{
//     console.log(abhishek);
//     throw new ReferenceError("Abhisek is not a good Coder")
// }
// catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// * SIMPLE CODE

try{
    let age = parseInt(prompt("Enter your age:"))
    if(age>150) {
        throw new ReferenceError("This is probably not true")
    }
}
catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log('This script is still running');