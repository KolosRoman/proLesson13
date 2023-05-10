let login = document.getElementById('login');
let password = document.getElementById('password');
let onButton = document.getElementById('button');
let form = document.getElementById('form');
let formContainer = document.getElementById('form-container');
let wrongContainer = document.getElementById('wrong-container');
let errorLogin = document.getElementById('error-message-login');
let errorPassword = document.getElementById('error-message-password');
let okButton = document.getElementById('wrong-button');
let adminCorrect = 'name@domain.com';
let passwordCorrect = 'password123';


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginInput = login.value;
    let passwordInput = password.value;

    if(!loginInput) {
        errorLogin.textContent = 'Поле не має бути порожнім';
        login.classList.add('form-input-error');
        return;
    }

    if(!passwordInput) {
        errorPassword.textContent = 'Поле не має бути порожнім';
        password.classList.add('form-input-error');
        return;
    }

    if (loginInput !== adminCorrect || passwordInput !== passwordCorrect) {
        wrongContainer.classList.add('wrong-active');
        login.value = '';
        password.value = '';
    } else {
        formContainer.classList.add('correct');
    }
})

login.addEventListener('blur', () => {
    let loginInput = login.value;

    if(!loginInput) {
        errorLogin.textContent = 'Поле не має бути порожнім';
        login.classList.add('form-input-error');
        return;
    }

    if(!loginInput.includes('@')) {
        errorLogin.textContent = 'Логін має містити символ @';
        login.classList.add('form-input-error');
        login.value = '';
        return;
    }

    if(loginInput.substring(0, 3).includes('@')) {
        errorLogin.textContent = 'Зліва від символа @ має бути 3 і більше символів';
        login.classList.add('form-input-error');
        login.value = '';
        return;
    }

    let dogIndex = loginInput.indexOf('@');
    let domenName = loginInput.substring(dogIndex + 1)
    
    if (!domenName.includes('.')) {
        errorLogin.textContent = "Праворуч від @ має бути доменне ім'я і регіон розділені крапкою";
        login.classList.add('form-input-error');
        login.value = '';
        return;
    }

    if (domenName.substring(0, 2).includes('.')) {
        errorLogin.textContent = 'У доменному імені має бути мінімум 2 символи';
        login.classList.add('form-input-error');
        login.value = '';
        return;
    }

    let domenIndex = domenName.indexOf('.');
    let regionName = domenName.substring(domenIndex + 1);

    if (regionName.length < 2) {
        errorLogin.textContent = 'У імені регіону має бути мінімум 2 символи';
        login.classList.add('form-input-error');
        login.value = '';
        return;
    }
})

login.addEventListener('focus', () => {
    errorLogin.textContent = ''
    login.classList.remove('form-input-error');
})

password.addEventListener('blur', () => {
    let passwordInput = password.value;

    if(!passwordInput) {
        errorPassword.textContent = 'Поле не має бути порожнім';
        password.classList.add('form-input-error');
        return;
    }

    if (passwordInput.length < 6) {
        errorPassword.textContent = 'Пароль має складатися з 6-ти і більше символів';
        password.classList.add('form-input-error');
        password.value = '';
        return;
    }
})

password.addEventListener('focus', () => {
    errorPassword.textContent = ''
    password.classList.remove('form-input-error');
})

okButton.addEventListener('click', () => {
    wrongContainer.classList.remove('wrong-active');
})