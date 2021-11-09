// caching the dom element
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordTwo = document.querySelector('#passwordTwo');



// function of show error message
function displayError(elementName, msg){
    elementName.parentElement.className = 'form-control error';
    elementName.parentElement.querySelector('small').innerText = msg;
}


// validated function
function validatedUsername(elementName, min, max){
    if (elementName.value.length < min) {
        displayError(elementName, `User name must be at least ${min} charecter long`)
    }else if (elementName.value.length > max){
        displayError(elementName, `User name must be less then ${max} charecters`)
    }else{
        elementName.parentElement.className = 'form-control success';
    }
}


// form add event functions
form.addEventListener('submit' , function (e){
    e.preventDefault();
    validatedUsername(username, 4, 15);
});