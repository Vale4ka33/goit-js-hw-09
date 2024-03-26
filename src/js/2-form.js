const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea[name="message"]');
const email = form.querySelector('input[name="email"]');

const userInfoKey = "feedback-form-state";
let currentState = {};

form.addEventListener('input', onFormInput);

let storageElem = JSON.parse(localStorage.getItem(userInfoKey));
if (storageElem) {
    email.value = storageElem.email || '';
    textarea.value = storageElem.message || '';
}

function onFormInput(event) {
    currentState = {
        email: email.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(userInfoKey, JSON.stringify(currentState));
    storageElem = JSON.parse(localStorage.getItem(userInfoKey)); 
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!currentState.email.trim() || !currentState.message.trim()) {
        return;
    }
    localStorage.removeItem(userInfoKey);
    email.value = '';
    textarea.value = '';
    console.log(storageElem);
});