import { readFileString } from '../functions.js'

const input = readFileString('09/day09_input.txt').map(line =>
  line.split('').map(num => +num)
)

let sum = 0
const row = input[0].length - 1
const column = input.length - 1

for (let i = 0; i <= column; i++) {
  for (let j = 0; j <= row; j++) {
    const current = input[i][j]
    let danger = 0
    if (i > 0 && i < column && j > 0 && j < row) {
      if (input[i - 1][j] > current) danger += 1
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 4) sum += current + 1
    } else if (j === 0 && i === 0) {
      // top l
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 2) sum += current + 1
    } else if (j === row && i === column) {
      // bot r
      if (input[i - 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1

      if (danger === 2) sum += current + 1
    } else if (j === row && i === 0) {
      // top r
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1

      if (danger === 2) sum += current + 1
    } else if (j === 0 && i === column) {
      // bot l
      if (input[i - 1][j] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 2) sum += current + 1
    } else if (i === 0 && j > 0 && j < row) {
      // top
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 3) sum += current + 1
    } else if (i === column && j > 0 && j < row) {
      // bot
      if (input[i - 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 3) sum += current + 1
    } else if (i > 0 && i < column && j === 0) {
      // left
      if (input[i - 1][j] > current) danger += 1
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j + 1] > current) danger += 1

      if (danger === 3) sum += current + 1
    } else if (i > 0 && i < column && j === row) {
      // right
      if (input[i - 1][j] > current) danger += 1
      if (input[i + 1][j] > current) danger += 1
      if (input[i][j - 1] > current) danger += 1

      if (danger === 3) sum += current + 1
    }
  }
}

console.log(sum)
