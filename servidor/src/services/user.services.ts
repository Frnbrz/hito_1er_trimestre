import fs from 'fs'
import usersData from '../bd/users.json'
import { User, newUserEntry } from '../types'

const users: User[] = usersData as User[]

export const getUsers = (): User[] => users

export const findUserById = (id: number): User | undefined => {
	const user = users.find(user => user.id === id)
	return user
}

export const addUser = (newUserEntry: newUserEntry): User => {
	const newUser = {
		id: users.length + 1,
		...newUserEntry,
	}

	fs.writeFileSync(
		'./src/bd/users.json',
		JSON.stringify([...users, newUser], null, 2),
	)

	users.push(newUser)

	return newUser
}
