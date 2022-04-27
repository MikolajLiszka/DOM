function validateForm() {
    let empty = document.forms[flname][mail][one].value;

    if(empty = ' ') {
        alert('Uzupełnij!');
    }
}

let submitButton = document.getElementById('btn');

submitButton.addEventListener('submit', validateForm());