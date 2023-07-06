let arr1 = [3, 4, 5]
let obj1 = {...arr1}
console.log(obj1);
function sum(v1, v2, v3) {
    return v1+v2+v3
}

console.log(sum(...arr1));

let obj2 = {
    name: "Abhishek",
    company: "Company xyz",
    address: "XYZ",
}

console.log({...obj2, name: "John", company: "ABC"});