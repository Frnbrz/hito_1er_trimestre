import bcrypt from 'bcrypt'
import fs from 'fs'
import usersData from '../bd/users.json'
import { Role, ThrowError } from '../types/enums'
import { User, newUserEntry } from '../types/types'

const users: User[] = usersData as User[]

export function getUsers(): User[] {
  return users
}

export function findUserById(id: number): User | undefined {
  const user = users.find((user) => user.id === id)
  return user
}

export function addUser(newUserEntry: newUserEntry): User {
  const newUser: User = {
    id: users.length + 1,
    role: Role.user,
    password: bcrypt.hashSync(newUserEntry.password, 10),
    name: newUserEntry.name,
    email: newUserEntry.email
  }

  console.log(newUser)

  if (users.find((user) => user.email === newUser.email)) {
    throw new Error(ThrowError.EMAIL)
  }

  users.push(newUser)

  console.log(users)
  try {
    fs.writeFileSync('./src/bd/users.json', JSON.stringify(users, null, 2))
  } catch (error) {
    throw new Error(ThrowError.BD)
  }

  return newUser
}
