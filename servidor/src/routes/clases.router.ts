import express from 'express'
import { findClaseById, getClases } from '../services/clases.services'
import { StatusMessage, StatusType } from '../types/enums'

export const clasesRouter = express.Router()

clasesRouter.get('/', (_req, res) => {
  res.send({ status: StatusType.OK, data: getClases() })
})

clasesRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const clase = findClaseById(+id)

  return clase !== undefined
    ? res.send({ status: StatusType.OK, data: clase })
    : res
        .status(404)
        .send({ status: StatusType.NOT_FOUND, message: StatusMessage.USER })
})
