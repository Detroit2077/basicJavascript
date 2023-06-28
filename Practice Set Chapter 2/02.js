const prompt = require('prompt-sync')();

const a = (prompt('Enter a number: '))

switch (a) {
    case '1':
        console.log('Venom');
        break;
    case '2':
        console.log('Hulk');
        break;
    case '3':
        console.log('Spiderman');
        break;
}