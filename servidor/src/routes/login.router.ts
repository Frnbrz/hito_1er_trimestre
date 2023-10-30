import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { login } from '../services/login.service'
import { User, newLoginEntry } from '../types'
import { statusMessage, toNewLoginEntry } from '../utils'

const SECRET_KEY = 'your-secret-key-here'

export const loginRouter = express.Router()
loginRouter.post('/', (req: Request, res: Response) => {
  try {
    const newLoginEntry: newLoginEntry = toNewLoginEntry(
      req.body
    ) as newLoginEntry
    const user: User | undefined = login(newLoginEntry) as User
    if (user !== undefined) {
      const { id, name } = user
      const token = jwt.sign(
        {
          sub: id,
          name,
          exp: Date.now() + 60 * 1000
        },
        SECRET_KEY
      )
      res
        .status(200)
        .send({ status: statusMessage.OK, data: { user: { name }, token } })
    } else {
      res
        .status(401)
        .send({ status: statusMessage.UNAUTHORIZED, message: 'error at login' })
    }
  } catch (error: any) {
    res.status(400).send({
      status: statusMessage.BAD_REQUEST,
      message: error.message,
      error
    })
  }
})
