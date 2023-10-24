import { NextFunction, Request, Response } from 'express'

export function middleware(req: Request, res: Response, next: NextFunction) {
	const token = req.headers.authorization

	if (token) {
		next()
	} else {
		res.status(401).json({ message: 'Unauthorized' })
	}
}
