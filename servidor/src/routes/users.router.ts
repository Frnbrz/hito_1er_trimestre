import express from 'express'
import { addUser, findUserById, getUsers } from '../services/user.services'
import { toNewUserEntry } from '../utils/utils'

export const usersRouter = express.Router()

usersRouter.get('/', (_req, res) => {
  res.send({ status: 'OK', data: getUsers() })
})

usersRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const user = findUserById(+id)

  return user !== undefined
    ? res.send({ status: 'OK', data: user })
    : res.status(404).send({ status: 'NOT FOUND', message: 'User not found' })
})

usersRouter.post('/', (req, res) => {
  try {
    const newUserEntry = toNewUserEntry(req.body)
    const addedUserEntry = addUser(newUserEntry)

    res.json(addedUserEntry)
  } catch (error: any) {
    res.status(400).send({ status: 'BADREQUEST', message: error.message })
  }
})
