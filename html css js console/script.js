console.log(`log`);
console.info('info');
console.warn(`warn`);
console.error(`err`);
console.assert('err'!=false);;
console.assert(`err`==false)

console.clear();

console.time('loop')
for(let a = 0; a<5 ; a++) { 
    console.log(255);
}
console.timeEnd('loop')