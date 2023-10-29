function login() {
  const email = document.querySelector('#floatingInput').value
  const password = document.querySelector('#floatingPassword').value

  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then((res) => {
    if (res.status === 200) {
      res.json().then((data) => {
        localStorage.setItem('token', data.token)
        window.location.href = '/home.html'
      })
    }
    document.querySelector('.error').innerHTML = 'Login failed'
  })
}
