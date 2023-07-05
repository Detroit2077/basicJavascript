class RailwayForm {
    submit() {
        alert(this.name + "Your form is submitted")
    }
    cancel() {
        alert(this.name + ": This form is cancelled")
    }
    fill(givename, trainno) {
        this.name = givename
        this.trainno = trainno
    }
}

let abhishekForm = new RailwayForm()
abhishekForm.fill("Abhishek", 420)

let rohanForm = new RailwayForm()
rohanForm.fill("Rohan", 450)

abhishekForm.submit()
rohanForm.submit()