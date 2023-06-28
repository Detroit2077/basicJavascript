let num = [1, 2, 4, 45, 6]; 
let b = num.toString();
console.log(typeof b);

let c = num.join('_')
console.log(c, typeof c);

let d = num.pop()
console.log(num, d); //pop returns the popped element

let e = num.push(67); //push returns the new array length
console.log(num, e);

let f = num.shift(); //remove first element and returns it
console.log(f, num);

let g = num.unshift(78);//add the number to the first index and return the new length of the array
console.log(num, g);

let h = delete num[3];//remove the elements from the array of the specified index
console.log(num, num.length);

let num_more = [11, 12 ,13, 14, 15, 16, 17, 18]//concatenate two array
let num_even_more = [112, 122 ,133, 144, 155, 166, 177, 178]
let new_array = num.concat(num_more, num_even_more);//returns a new array does not change existing arrays.
// console.log(new_array);

let oddnumbers = [34, 12, 67, 9 ,37, 4452, 982];//sort a array in an alphabetically increasing order
oddnumbers.sort();
console.log(oddnumbers.length);
console.log(oddnumbers);

let compare = (a, b) => { //this function is  necessary to sort the array numerically
    return b - a;
}
oddnumbers.sort(compare);
console.log(oddnumbers);


//splice and slice
let random = [1234, 4123, 4552, 5574, 7456, 356, 53];
let deletedValues = random.splice(3, 2, 412, 12, 34,  76);
console.log(random);
console.log(deletedValues);

console.log(num_more); //does not modify the current array
console.log(num_more.slice(3));
console.log(num_more.slice(1, 3));