
let form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let firstName = document.getElementById('fname').value;
    console.log(firstName);

    let lastName = document.getElementById('lname').value;
    console.log(lastName);


})