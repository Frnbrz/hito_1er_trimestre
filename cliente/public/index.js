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
        document.cookie = `token=${data.data.token}`
        window.history.pushState({}, '', '/home')
        window.location.reload()
      })
    }
    document.querySelector('.error').innerHTML = 'Login failed'
  })
}
