import express from 'express'
import { addUser, findUserById, getUsers } from '../services/user.services'
import { statusMessage, toNewUserEntry } from '../utils'

export const usersRouter = express.Router()

usersRouter.get('/', (_req, res) => {
  res.send({ status: statusMessage.OK, data: getUsers() })
})

usersRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const user = findUserById(+id)

  return user !== undefined
    ? res.send({ status: statusMessage.OK, data: user })
    : res
        .status(404)
        .send({ status: statusMessage.NOT_FOUND, message: 'User not found' })
})

usersRouter.post('/', (req, res) => {
  try {
    const newUserEntry = toNewUserEntry(req.body)
    const addedUserEntry = addUser(newUserEntry)

    res.json(addedUserEntry)
  } catch (error: any) {
    res
      .status(400)
      .send({ status: statusMessage.BAD_REQUEST, message: error.message })
  }
})
