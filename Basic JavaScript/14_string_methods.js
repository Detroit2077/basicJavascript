let name = 'abhishek';
console.log(`${name.length}`);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2));


let u = 'abhishek bhai';
console.log(u.replace('abhishek', 'ankit'));

console.log(name.concat(` ${u}`));



let c = "               trim            "
console.log(c.trim());


let fr = "radika" + "kamini" + "joshi";
for (let i = 0; i < fr.length; i++) {
    console.log(fr[i]);
}