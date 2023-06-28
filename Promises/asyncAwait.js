async function weather() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('27 deg')
        }, 2000);
    })
    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('24 deg')
        },5000);
    })

    // delhiweather.then(alert)
    // bangloreweather.then(alert)
    console.log('fetching delhi weather please wait....');
    let delhiw = await delhiweather;
    console.log('fetching banglore weather is '+ delhiw);
    console.log('fetching banglore weather please wait....');
    let banglorew = await bangloreweather
    console.log('fetching banglore weather is '+ banglorew);
    return [delhiw, banglorew]
}
const cherry = async() => {
    console.log('Hey I am cherry and I am not waiting');
}

const main1 = async() => {
    
    console.log('welcome to weather forecasting');
    let a = await weather()
    let b = await cherry()
}

main1()