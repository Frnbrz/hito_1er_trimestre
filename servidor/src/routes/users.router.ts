import express from 'express'
import { addUser, findUserById, getUsers } from '../services/user.services'
import { toNewUserEntry } from '../utils'

const usersRouter = express.Router()

usersRouter.get('/', (_req, res) => {
	res.send(getUsers())
})

usersRouter.get('/:id', (req, res) => {
	const id = req.params.id
	const user = findUserById(+id)

	return user !== undefined ? res.send(user) : res.sendStatus(404)
})

usersRouter.post('/', (req, res) => {
	try {
		const newUserEntry = toNewUserEntry(req.body)
		const addedUserEntry = addUser(newUserEntry)

		res.json(addedUserEntry)
	} catch (error: any) {
		res.status(400).send(error.message)
	}
})

export { usersRouter }
