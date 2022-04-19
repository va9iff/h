document.querySelector('form#login-form').addEventListener('submit',(e)=>{
    localStorage.u= document.querySelector('#LoginForm_username').value
    localStorage.p= document.querySelector('#LoginForm_password').value
})