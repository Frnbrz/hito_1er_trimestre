import { newLoginEntry, newUserEntry } from './types'

export const toNewUserEntry = (object: any): newUserEntry => {
	const newUserEntry: newUserEntry = {
		name: parseName(object.name),
		email: parseEmail(object.email),
		password: parsePassword(object.password),
	}

	return newUserEntry
}

export const toNewLoginEntry = (object: any): newLoginEntry => {
	const newLoginEntry: newLoginEntry = {
		email: parseEmail(object.email),
		password: parsePassword(object.password),
	}

	return newLoginEntry
}

const isString = (text: any): boolean => {
	return typeof text === 'string' || text instanceof String
}

const isUndefined = (text: any): boolean => {
	return text === undefined
}

const parseName = (nameFromRequest: any): string => {
	if (!isString(nameFromRequest) || isUndefined(nameFromRequest)) {
		throw new Error('Incorrect or missing name')
	}

	return nameFromRequest
}

const parseEmail = (emailFromRequest: any): string => {
	if (!isString(emailFromRequest) || isUndefined(emailFromRequest)) {
		throw new Error('Incorrect or missing email')
	}

	return emailFromRequest
}

const parsePassword = (passwordFromRequest: any): string => {
	if (!isString(passwordFromRequest) || isUndefined(passwordFromRequest)) {
		throw new Error('Incorrect or missing password')
	}

	return passwordFromRequest
}
