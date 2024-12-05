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

export const superslice = (arr, len) => {
  let a = []
  for (let i = 0; i < arr.length; i += len) {
    a.push(arr.slice(i, i + len))
  }
  return a
}
