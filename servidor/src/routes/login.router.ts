import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { login } from '../services/login.service'
import { toNewLoginEntry } from '../utils'

export const SECRET_KEY = 'your-secret-key-here'

const loginRouter = express.Router()
loginRouter.post('/', (req: Request, res: Response) => {
  try {
    const newLoginEntry = toNewLoginEntry(req.body)
    const user = login(newLoginEntry)
    if (user) {
      const { id, name } = user
      const token = jwt.sign(
        {
          sub: id,
          name: name,
          exp: Date.now() + 60 * 1000,
        },
        SECRET_KEY,
      )

      res.status(200).send({ user: { name }, token })
    } else {
      res.status(401).send({ error: 'invalid username or password' })
    }
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export { loginRouter }
