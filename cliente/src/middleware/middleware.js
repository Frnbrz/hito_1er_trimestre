export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization

  if (token) {
    next()
  } else {
    return res.redirect('index.html')
  }
}
