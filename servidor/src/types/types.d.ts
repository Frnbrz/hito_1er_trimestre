export interface User {
  id: number
  name: string
  email: string
  password: string
}

export type newUserEntry = Omit<User, 'id'>

export type newLoginEntry = Omit<User, 'id', 'name'>

export interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  img: string
}

export type newProductEntry = Omit<Product, 'id'>
