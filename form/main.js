const button = document.querySelector('.but');

button.addEventListener('click', ()=> {
    const form = document.querySelector('form');
    form.classList.toggle('go--right')

    const text = document.querySelector('.text');
    text.classList.toggle('go--right');

    const left = document.querySelector('.left');
    left.classList.toggle('left--back')
})

function validitName() {
    const inputName = document.querySelector('.input--name').value;
    const nameError = document.querySelector('#name-error');

    if (inputName.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    
    if (!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validitPassword() {
    const inputPassword = document.querySelector('.input--password').value;
    const passwordError = document.getElementById('password-error')
    // .length
    if (inputPassword === '') {
        passwordError.innerHTML = 'password is required'
        return false
    }
    if (inputPassword.length < 7) {
        passwordError.innerHTML = 'password 8 up'
        return false
    }

    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validitEmail() {
    const inputEmail = document.querySelector('.input--email').value;
    const emailError = document.querySelector('#email-error');

    if (inputEmail.length === 0) {
        emailError.innerHTML = 'email is requerid'
        return false
    }
    
    if (!inputEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'invalued'
        return false
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateFrom() {
    if (!validitName() || !validitEmail() || !validateFrom()) {
        alert('Please fix error to submit or you mess something');
        return false;
    } else {
        alret('Don');
    }
}
