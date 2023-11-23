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

function renderNavbar() {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">DuBo</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav d-flex justify-content-between aling-items-center w-100 ">
              <div class="d-flex">
                <a class="nav-link" href="/clases">Clases</a>
                <a class="nav-link" href="/clases">Tus clases</a>
              </div>
              <span>
                ${localStorage.getItem('usuario')}
              </span>
              <button class="btn btn-sm btn-outline-secondary" id="logout" type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>`

  const routes = ['/home.html']

  if (routes.includes(window.location.pathname)) {
    console.log('render navbar')
    document.querySelector('.navbarRenderizado').innerHTML = navbarHTML
    document.querySelector('#logout').addEventListener('click', logout)
  }
}

renderNavbar()
