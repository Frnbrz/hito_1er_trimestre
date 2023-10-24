import express from 'express'

const port = 3001
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function middleware(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    next()
  } else {
    return res.redirect('index.html')
  }
}

app.use(middleware)

app.get('/', (_req, res) => {
  return res.redirect('index.html')
})

app.get('/home', (_req, res) => {
  return res.redirect('home.html')
})

app.listen(port, () => {
  console.log(`The application started
successfully on port ${port}`)
})
