import { readFileString, readFileInt } from '../functions.js'

const input = readFileString('02/day02_input.txt').map(line => line.split(' '))

let horizontal = 0
let depth = 0
input.forEach(command => {
  if (command[0] === 'forward') horizontal += +command[1]
  else if (command[0] === 'up') depth -= +command[1]
  else depth += +command[1]
})

console.log(horizontal * depth)

let aim = 0
horizontal = 0
depth = 0
input.forEach(command => {
  if (command[0] === 'forward') {
    horizontal += +command[1]
    depth += aim * command[1]
  } else if (command[0] === 'up') aim -= +command[1]
  else aim += +command[1]
})
console.log(horizontal * depth)
