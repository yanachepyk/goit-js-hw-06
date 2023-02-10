const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    if(event.currentTarget.value === ''){
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
});