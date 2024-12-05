import { readFileString, readFileInt } from '../functions.js'

const input = readFileString('01/input.txt')
const sums = []

let curSum = 0

input.forEach(line => {
  if (line !== '') {
    curSum += +line
  } else {
    sums.push(curSum)
    curSum = 0
  }
})

const sorted = sums.sort().reverse()

console.log(sorted[0])
console.log(sorted[0] + sorted[1] + sorted[2])
