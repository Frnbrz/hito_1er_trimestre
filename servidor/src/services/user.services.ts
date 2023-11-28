import bcrypt from 'bcrypt'
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
  const newUser = {
    id: users.length + 1,
    ...newUserEntry,
    role: Role.user,
    password: bcrypt.hashSync(newUserEntry.password, 10)
  }

  if (users.find((user) => user.email === newUser.email)) {
    throw new Error(ThrowError.EMAIL)
  }

  // fs.writeFileSync(
  //   './src/bd/users.json',
  //   JSON.stringify([...users, newUser], null, 2)
  // )

  users.push(newUser)

  return newUser
}
