import { readFileString } from '../functions.js'

const input = readFileString('06/day06_input.txt')[0]
  .split(',')
  .map(fish => +fish)
const fishes = new Array(9).fill(0)

input.forEach(fish => {
  fishes[fish] += 1
})

for (let i = 0; i < 256; i++) {
  const fish0 = fishes[0]

  for (let j = 0; j < fishes.length - 1; j++) {
    fishes[j] = fishes[j + 1]
  }
  fishes[6] += fish0
  fishes[8] = fish0
}

console.log(fishes.reduce((prev, sum) => prev + sum))
