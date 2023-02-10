const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.className = 'valid';
        
    } else {
        inputEl.className = 'invalid';
    }
})
 
