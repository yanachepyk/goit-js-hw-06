const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
   const email = event.currentTarget.elements.email;
   const password = event.currentTarget.elements.password;
    if(email.value ==='' || password.value === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
        console.log({
            email: email.value,
            password: password.value
        });
        event.currentTarget.reset();
    }
});
