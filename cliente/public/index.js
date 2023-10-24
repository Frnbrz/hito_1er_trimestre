function login() {
	const email = document.querySelector('#inputEmail').value
	const password = document.querySelector('#inputPassword').value

	console.log(email, password)
	fetch('http://localhost:3000/api/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	}).catch(error => console.error(error))
}
