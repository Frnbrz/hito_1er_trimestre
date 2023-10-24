import cors from 'cors'
import express from 'express'
import { middleware } from './middleware/user.middleware'
import { loginRouter } from './routes/login.router'
import { usersRouter } from './routes/users.router'

// EXPRESS
const app = express()
app.use(cors())
app.use(express.json())

// CONFIG
const PORT = 3000

// ROUTES
app.get('/', (_req, res) => {
  res.send('Hola mndo!')
})

app.use('/api/users', middleware, usersRouter)
app.use('/api/login', loginRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
