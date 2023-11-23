import clasesData from '../bd/clases.json'
import { Clase } from '../types/types'

const clases: Clase[] = clasesData as Clase[]

export function getClases(): Clase[] {
  return clases
}

export function findClaseById(id: number): Clase | undefined {
  const clase = clases.find((clase) => clase.id === id)
  return clase
}
