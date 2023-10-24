import usersData from '../bd/users.json'
import { User } from '../types'
import { newLoginEntry } from './../types.d'

const users: User[] = usersData as User[]

export const login = (
	newLoginEntry: newLoginEntry,
): newLoginEntry | undefined => {
	const user = users.find(
		user =>
			user.email === newLoginEntry.email &&
			user.password === newLoginEntry.password,
	)

	if (user) {
		return user
	}

	return undefined
}
