import fs from 'fs'
import storeData from '../bd/store.json'
import { Product, newProductEntry } from './../types/types.d'

const products: Product[] = storeData as Product[]

export function getProducts(): Product[] {
  return products
}

export function findProductById(id: number): Product | undefined {
  const product = products.find((product) => product.id === id)
  return product
}

export function addProduct(newProductEntry: newProductEntry): Product {
  const newProduct = {
    id: products.length + 1,
    ...newProductEntry
  }

  if (products.find((product) => product.name === newProduct.name)) {
    throw new Error('Product already exists')
  }

  fs.writeFileSync(
    './src/bd/users.json',
    JSON.stringify([...products, newProduct], null, 2)
  )

  products.push(newProduct)

  return newProduct
}
