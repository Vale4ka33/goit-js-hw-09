const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea[name="message"]');
const email = form.querySelector('input[name="email"]');

const userInfoKey = "feedback-form-state";
let currentState = {};

form.addEventListener('input', onFormInput);

function loadForm() {
    let storageElem = JSON.parse(localStorage.getItem(userInfoKey));
    if (storageElem) {
        email.value = storageElem.email || '';
        textarea.value = storageElem.message || '';
        currentState = storageElem;
}
}

loadForm();

function onFormInput(event) {
    currentState = {
        email: email.value ? email.value.trim() : '',
        message: textarea.value ? textarea.value.trim() : ''
    };
    localStorage.setItem(userInfoKey, JSON.stringify(currentState));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!currentState.email.trim() || !currentState.message.trim()) {
        return;
    }
    localStorage.removeItem(userInfoKey);
    email.value = '';
    textarea.value = '';
    console.log(currentState);
});