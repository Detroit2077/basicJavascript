// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "abhishek")
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert('Changed');
    console.log(e);
  };
  