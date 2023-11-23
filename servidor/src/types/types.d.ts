import { Role } from './enums'

export interface User {
  id: number
  name: string
  email: string
  role: Role
  password: string
}

export interface Profesor {
  id: number
  name: string
  email: string
  description: string
  role: Role
  password: string
}

interface Clase {
  id: number
  name: string
  description: string
  image: string
  aforo: number
  horario: string[]
  profesor: number
  users: number[]
}

export type newUserEntry = Omit<User, 'id', 'password'>

export type newLoginEntry = Omit<User, 'id', 'name', 'role'>

export interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  img: string
}

export type newProductEntry = Omit<Product, 'id'>
