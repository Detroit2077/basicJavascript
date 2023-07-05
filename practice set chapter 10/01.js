let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((value) => {
    return value.json()
}).then((value2) => {
    console.log(value2);
    ihtml = ""
    for (item in value2) {
        console.log(value2[item]);
        ihtml += `
            <div class="card" style="width: 22rem;">
                <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" class="card-img-top" alt="Coding" height="200" width = "100">
                    <div class="card-body">
                        <h5 class="card-title">${value2[item].name}</h5>
                        <p>Status is: ${value2[item].status}
                        <p>Site: ${value2[item].site}
                        <p>Starts at: ${value2[item].start_time}
                        <p>Ends at: ${value2[item].end_time}
                        <p>In 24 hours: ${value2[item].in_24_hours}
                        <br>
                        <a href="${value2[item].url}" class="btn btn-primary my-3">Visit Contest</a>
                    </div>
            </div>
            `
    }
    let cardContainer = document.getElementById('cardContainer')
    cardContainer.innerHTML = ihtml
})

// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//     localStorage.setItem("note", a)
// }

// let c = confirm(`Do you want to delete your note?`)
// if(c) {
//     localStorage.removeItem("note")
// }