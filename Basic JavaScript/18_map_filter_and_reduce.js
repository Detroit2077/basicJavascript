//forEach
// let number = [1, 2, 3, 5, 9];
// let a = number.forEach((value) => {
//     console.log(value*value);
// })


//Map()
let numbers = [23, 4, 6, 90, 12];
let y = numbers.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
})
console.log(y);


//filter
let arr2 = numbers.filter((value) => {
    return value>10;
})
console.log(arr2);

//reduce
let arr3 = numbers.reduce((Abhi, index) => {
    return Abhi + index
})
console.log(arr3);