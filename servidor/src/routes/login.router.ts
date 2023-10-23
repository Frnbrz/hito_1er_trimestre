import express from 'express'
import { login } from '../services/user.services'

const loginRouter = express.Router()

loginRouter.post('/', (req, res) => {
	const user = login(req.body.email, req.body.password)
	if (user) {
		res.send({ jwt: 'token', status: 200 })
	} else {
		res.sendStatus(404)
	}
})

export { loginRouter }
