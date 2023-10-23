import express from 'express'
import { loginRouter } from './routes/login.router'
import { usersRouter } from './routes/users.router'

// EXPRESS
const app = express()
app.use(express.json())

// CONFIG
const PORT = 3000

// ROUTES
app.get('/', (_req, res) => {
	res.send('Hola mndo!')
})

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
