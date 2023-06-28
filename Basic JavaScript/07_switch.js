const prompt = require('prompt-sync')();

const a = prompt("Enter the name of the valorant agent: ");

switch (a) {
    case 'Jett': 
        console.log('DetroitOP');
        break;
        case 'Sova':
            console.log('Ionicx');
            break;
            case 'Reyna':
                console.log('robosapiens');
                break;
}
console.log('Done');
