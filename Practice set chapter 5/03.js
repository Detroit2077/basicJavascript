let arr = [10, 20, 56, 34, 40, 43, 90]

let arr2 = arr.filter((value) => {
    if(value%10==0) {
        return value;
    };
})
console.log(arr2);