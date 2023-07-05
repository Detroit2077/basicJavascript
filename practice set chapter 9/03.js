const something = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('some error is happening'))
        }, 3000);
    })
}
const anything = async() => {
    try{
        let p1 = await something();
        console.log(p1);
    }
    catch (error) {
        console.log(error);
    }
}
anything()