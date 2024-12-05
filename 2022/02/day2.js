import { readFileString, readFileInt } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(' '))

const mine = ['X', 'Y', 'Z']
const opponent = ['A', 'B', 'C']

let score = 0

input.forEach(ar => {
  const elf = opponent.findIndex(a => a === ar[0]) + 1
  const me = mine.findIndex(a => a === ar[1]) + 1

  if (me === elf) {
    score += 3
    score += me
  } else if (me - elf === 2 || (me < elf && me - elf !== -2)) {
    score += me
  } else score += 6 + me
})

console.log(score)

score = 0

input.forEach(ar => {
  const elf = opponent.findIndex(a => a === ar[0]) + 1
  const outcome = mine.findIndex(a => a === ar[1]) + 1

  if (outcome === 1) {
    score += ((elf + 1) % 3) + 1
  } else if (outcome === 2) {
    score += 3
    score += elf
  } else {
    score += 6 + (elf % 3) + 1
  }
})

console.log(score)
