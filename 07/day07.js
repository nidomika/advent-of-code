import { readFileString } from '../functions.js'

const input = readFileString('07/day07_input.txt')[0]
  .split(',')
  .map(pos => +pos)

input.sort((a, b) => a - b)

const median = input[input.length / 2]
let fuel = 0
input.forEach(crab => (fuel += Math.abs(median - crab)))

console.log(fuel)

let average = Math.floor(input.reduce((a, b) => a + b) / input.length)
fuel = 0
input.forEach(crab => {
  const diff = Math.abs(average - crab)
  let crabFuel = 0
  for (let i = 1; i <= diff; i++) {
    crabFuel += i
  }
  fuel += crabFuel
})

console.log(fuel)
