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

export const divideArrayToEqualParts = (arr, partLength) => {
  let a = []
  for (let i = 0; i < arr.length; i += partLength) {
    a.push(arr.slice(i, i + partLength))
  }
  return a
}

export const add = (partialSum, a) => partialSum + a

export const arraySum = arr => arr.reduce(add, 0)

export const intersection = (arr1, arr2) =>
  arr1.filter(value => arr2.includes(value))

export const intersectionOfThree = (arr1, arr2, arr3) =>
  [arr1, arr2, arr3].reduce((a, b) => a.filter(c => b.includes(c)))
