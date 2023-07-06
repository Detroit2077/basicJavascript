class Complex {
    constructor(variable1, variable2)
    {
        this.variable1 = variable1
        this.variable2 = variable2
    }
    set variables([value1, value2]) {
        this._varible1 = value1;
        this._varible2 = value2;
    }
    
    get variables() {
        console.log(`${variable1}i + ${variable2}`)
    }
}

let j = new Complex

j.variables = [4, 5]
console.log(j.variables);