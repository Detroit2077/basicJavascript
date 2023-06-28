const marks = {
    "abhishek":98,
    "rohan":70,
    "aakash":7
}

for(const a in obj) {
    console.log(`Marks obtained by ${a} is ${obj[a]}`);
}
//above code with for loop
for(let i = 0;i < Object.keys(marks).length;i++) {
    console.log(`Marks obtained by ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}