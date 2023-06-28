document.addEventListener('DOMContentLoaded', function() {
    let buttonElement = document.getElementById('myButton');
  
    console.log(buttonElement.id);
    console.log(buttonElement.className);
  
    buttonElement.innerHTML = 'Clicked!';
    buttonElement.disabled = true;
    buttonElement.classList.add('highlight');
});