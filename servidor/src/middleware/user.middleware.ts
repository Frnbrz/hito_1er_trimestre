import { NextFunction, Request, Response } from 'express'
import { statusMessage } from '../types/errors'

export function middleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers.authorization

  if (token !== undefined) {
    next()
  } else {
    res
      .status(401)
      .json({ status: statusMessage.BAD_REQUEST, message: 'No token' })
  }
}
