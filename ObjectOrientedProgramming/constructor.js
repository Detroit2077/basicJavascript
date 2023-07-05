class RailwayForm {
    constructor(givename, trainno, address) {
        console.log("Constructor called...." + givename + " " + trainno);
        this.givename = givename
        this.trainno = trainno
        this.address = address
    }

    preview() {
        alert(this.givename + "Your form is for train no. " + this.trainno + " and your address is " + this.address)
    }

    submit() {
        alert(this.givename + "Your form is submitted for train no. " + this.trainno)
    }

    cancel() {
        alert(this.givename + ": This form is cancelled for train no. " + this.trainno)
        this.trainno = 0
    }
}

let abhishekForm = new RailwayForm("Abhishek", 420, "Delhi")
abhishekForm.preview()
abhishekForm.submit()
abhishekForm.cancel()
abhishekForm.preview()