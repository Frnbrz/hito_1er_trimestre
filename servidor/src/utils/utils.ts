import bcrypt from 'bcrypt'
import { newLoginEntry, newProductEntry, newUserEntry } from '../types/types'

export function toNewUserEntry(object: any): newUserEntry {
  const newUserEntry: newUserEntry = {
    name: parseName(object.name),
    email: parseEmail(object.email),
    password: parsePassword(object.password)
  }

  return newUserEntry
}

export function toNewProductEntry(object: any): newProductEntry {
  const newProductEntry: newProductEntry = {
    name: parseName(object.name),
    category: parseCategory(object.category),
    price: parsePrice(object.price),
    stock: parseStock(object.stock),
    img: parseImg(object.img)
  }

  return newProductEntry
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

  const passwordEncrypt: string = encryptPassword(passwordFromRequest)

  return passwordEncrypt
}

function encryptPassword(password: string): string {
  const saltRounds = 10
  const passwordEncrypt = bcrypt.hashSync(password, saltRounds)

  return passwordEncrypt
}

function parseCategory(categoryFromRequest: string): string {
  if (!isString(categoryFromRequest) || isUndefined(categoryFromRequest)) {
    throw new Error('Incorrect or missing category')
  }

  return categoryFromRequest
}

function parsePrice(priceFromRequest: number): number {
  if (
    isUndefined(priceFromRequest) ||
    isNaN(priceFromRequest) ||
    priceFromRequest < 0
  ) {
    throw new Error('Incorrect or missing price')
  }
  return priceFromRequest
}

function parseStock(stockFromRequest: number): number {
  if (
    isUndefined(stockFromRequest) ||
    isNaN(stockFromRequest) ||
    stockFromRequest < 0
  ) {
    throw new Error('Incorrect or missing price')
  }
  return stockFromRequest
}

function parseImg(imgFromRequest: string): string {
  if (
    !isString(imgFromRequest) ||
    isUndefined(imgFromRequest) ||
    imgFromRequest === ''
  ) {
    throw new Error('Incorrect or missing img')
  }

  return imgFromRequest
}
