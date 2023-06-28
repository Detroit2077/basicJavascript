//forEach loop
let numbers = [12, 3, 4 ,56 ,78 ,90];

numbers.forEach((element) => {
    console.log(element*element);
})

//array.from
let name = "abhishek";
let arr = Array.from(name);
console.log(arr);

//for of
for (const iterator of name) {
    console.log(iterator);
}

//for in
for (const interator in name) {
    console.log(name[interator]);
}