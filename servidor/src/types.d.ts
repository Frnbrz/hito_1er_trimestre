export interface User {
  id: number
  name: string
  email: string
  password: string
}

export type newUserEntry = Omit<User, 'id'>

export type newLoginEntry = Omit<User, 'id', 'name'>
