import express from 'express'
import { login } from '../services/login.service'
import { toNewLoginEntry } from '../utils'

const loginRouter = express.Router()
loginRouter.post('/', (req, res) => {
	try {
		const newLoginEntry = toNewLoginEntry(req.body)
		if (login(newLoginEntry)) {
			res.send({ jwt: 'token', status: 200 })
		} else {
			res.sendStatus(404)
		}
	} catch (error: any) {
		res.status(400).send(error.message)
	}
})

export { loginRouter }
