const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const tely = document.getElementById('tely');

form.addEventListener('submit', e =>{
    
    validateInputs();
    
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         e.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = tely => {
    const phone = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    return phone.test(tely);
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telyValue = tely.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First Name is required');
    } else {
        setSuccess(firstname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid Email address');
    } else {
        setSuccess(email);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    }else {
        setSuccess(lastname);
    }

    if(telyValue === '') {
        setError(tely, 'Phone Number is required');
    } else if (!isValidPhone(telyValue)) {
        setError(tely, 'Phone Number must be of 10 characters');
    } else {
        setSuccess(tely);
    }

};
