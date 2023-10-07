const form = document.getElementById('form');
const salary = document.getElementById('salary');
const obligation = document.getElementById('obligation');
const rent = document.getElementById('rent');
const date = document.getElementById('date');

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

const validateInputs = () => {
    const salaryValue = salary.value.trim();
    const obligationValue = obligation.value.trim();
    const rentValue = rent.value.trim();
    const dateValue = date.value.trim();

    if(salaryValue === '') {
        setError(salary, 'Salary is required');
    } else {
        setSuccess(salary);
    }

    if(obligationValue === '') {
        setError(obligation, 'Monthly Obligation is required');
    }else {
        setSuccess(obligation);
    }

    if(rentValue === '') {
        setError(rent, 'Expected Yearly Rent Amount is required');
    }else {
        setSuccess(rent);
    }

    if(dateValue === '') {
        setError(date, 'Expected Rent Start Date is required');
    }else {
        setSuccess(date);
    }

};

