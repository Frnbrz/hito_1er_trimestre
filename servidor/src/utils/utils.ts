import { newLoginEntry, newUserEntry } from '../types/types'

export function toNewUserEntry(object: any): newUserEntry {
  const newUserEntry: newUserEntry = {
    name: parseName(object.name),
    email: parseEmail(object.email),
    password: parsePassword(object.password)
  }

  return newUserEntry
}

export function toNewLoginEntry(object: any): newLoginEntry {
  const newLoginEntry: newLoginEntry = {
    email: parseEmail(object.email),
    password: parsePassword(object.password)
  }

  return newLoginEntry
}

function isString(text: any): boolean {
  return typeof text === 'string' || text instanceof String
}

function isUndefined(text: any): boolean {
  return text === undefined
}

function parseName(nameFromRequest: any): string {
  if (!isString(nameFromRequest) || isUndefined(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  return nameFromRequest
}

function parseEmail(emailFromRequest: any): string {
  if (!isString(emailFromRequest) || isUndefined(emailFromRequest)) {
    throw new Error('Incorrect or missing email')
  }

  return emailFromRequest
}

function parsePassword(passwordFromRequest: any): string {
  if (!isString(passwordFromRequest) || isUndefined(passwordFromRequest)) {
    throw new Error('Incorrect or missing password')
  }

  return passwordFromRequest
}
