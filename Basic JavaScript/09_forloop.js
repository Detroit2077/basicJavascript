// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

const marks = {
    'abhishek': 90,
    'kundan': 100,
    'ankit':69,
    'saket':89
}

// for-in loop
for (const a in marks) {
    console.log("Marks of ", a, 'is ', marks[a]);
}
// another way to do the same thing
for (const a in marks) {
    console.log(`Marks of ${a} is ${marks[a]}`);
}
//for-of loop
let a = "Unnati"
for (const iterator of a) {
    console.log(iterator);
}
