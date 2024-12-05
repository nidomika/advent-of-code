import { readFileString, readFileInt } from '../functions.js'

let input = readFileString('03/day03_input.txt')
let gamma = ''
let epsilon = ''

for (let i = 0; i < input[0].length; i++) {
  let ones = 0
  let zeros = 0
  for (let j = 0; j < input.length; j++) {
    input[j][i] === '0' ? (zeros += 1) : (ones += 1)
  }
  if (zeros > ones) {
    gamma += '0'
    epsilon += '1'
  } else {
    gamma += '1'
    epsilon += '0'
  }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))

let copy = input

for (let i = 0; i < input[0].length; i++) {
  let ones = 0
  let zeros = 0
  for (let j = 0; j < input.length; j++) {
    input[j][i] === '0' ? (zeros += 1) : (ones += 1)
  }
  if (zeros > ones) {
    input = input.filter(element => element[i] === '0')
  } else {
    input = input.filter(element => element[i] === '1')
  }
}

for (let i = 0; i < copy[0].length; i++) {
  let ones = 0
  let zeros = 0

  for (let j = 0; j < copy.length; j++) {
    copy[j][i] === '0' ? (zeros += 1) : (ones += 1)
  }

  if (zeros > ones) {
    copy = copy.filter(element => element[i] === '1')
  } else {
    copy = copy.filter(element => element[i] === '0')
  }
  if (copy.length === 1) break
}

console.log(parseInt(input, 2) * parseInt(copy, 2))
