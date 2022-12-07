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

export const asc = (a, b) => a - b

export const desc = (a, b) => b - a

export const arraySum = arr => arr.reduce(add, 0)

export const intersection = (arr1, arr2) =>
  arr1.filter(value => arr2.includes(value))

export const intersectionOfThree = (arr1, arr2, arr3) =>
  [arr1, arr2, arr3].reduce((a, b) => a.filter(c => b.includes(c)))

export const isInRange = (min, value, max) => value >= min && value <= max

export const rotateRight = array => {
  let result = []
  array.forEach(function (a, i, aa) {
    a.forEach(function (b, j, bb) {
      result[bb.length - j - 1] = result[bb.length - j - 1] || []
      result[bb.length - j - 1][i] = b
    })
  })
  return result
}

export const rotateLeft = array => {
  let result = []
  array.forEach(function (a, i, aa) {
    a.forEach(function (b, j, bb) {
      result[j] = result[j] || []
      result[j][aa.length - i - 1] = b
    })
  })
  return result
}

export const manhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1)
}
