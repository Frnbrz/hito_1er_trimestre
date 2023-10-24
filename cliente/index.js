import express from 'express'

const port = 3001
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_req, res) => {
  return res.redirect('index.html')
})

app.listen(port, () => {
  console.log(`The application started
successfully on port ${port}`)
})
