import { readFileString } from '../functions.js'

const input = readFileString('input.txt')
  .map(line => line.split(','))
  .map(pair => pair.map(elf => elf.split('-').map(Number)))

let fullOverlap = 0
let overlap = 0
input.forEach(pair => {
  const elf1 = pair[0]
  const elf2 = pair[1]

  if (elf1[1] >= elf2[0] && elf2[1] >= elf1[0]) {
    overlap++
    if (
      (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) ||
      (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])
    ) {
      fullOverlap++
    }
  }
})

console.log(fullOverlap)
console.log(overlap)
