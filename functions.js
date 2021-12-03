import { readFileSync } from 'fs'

export const readFileString = file => {
  const text = readFileSync(file, 'utf-8')
  const input = text.split('\n')

  return input
}

export const readFileInt = file => {
  const text = readFileSync(file, 'utf-8')
  const input = text.split('\n')

  return input.map(line => parseInt(line))
}
