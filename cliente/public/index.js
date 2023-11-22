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
        localStorage.setItem('usuario', data.data.user.name)
        document.cookie = `token=${data.data.token}`
        window.history.pushState({}, '', '/home')
        window.location.reload()
      })
    }
    document.querySelector('.error').innerHTML = 'Login failed'
  })
}

function logout() {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.history.pushState({}, '', '/')
  window.location.reload()
}

document.querySelector('#logout').addEventListener('click', logout)

if (window.location.pathname === '/home.html') {
  const usuario = localStorage.getItem('usuario')

  document.querySelector('.usuario').innerHTML = usuario
}
