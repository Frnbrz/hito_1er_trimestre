import express from 'express'
import {
  addProduct,
  findProductById,
  getProducts
} from '../services/store.service'
import { toNewProductEntry } from '../utils/utils'

export const productsRouter = express.Router()

productsRouter.get('/', (_req, res) => {
  res.send({ status: 'OK', data: getProducts() })
})

productsRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const user = findProductById(+id)

  return user !== undefined
    ? res.send({ status: 'OK', data: user })
    : res.status(404).send({ status: 'NOT FOUND', message: 'User not found' })
})

productsRouter.post('/', (req, res) => {
  try {
    const newProductEntry = toNewProductEntry(req.body)
    const addedUserEntry = addProduct(newProductEntry)

    res.json(addedUserEntry)
  } catch (error: any) {
    res.status(400).send({ status: 'BADREQUEST', message: error.message })
  }
})
