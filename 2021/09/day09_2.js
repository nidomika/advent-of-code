import { readFileString } from '../functions.js'

const input = readFileString('09/day09_input.txt').map(line =>
  line.split('').map(num => {
    if (num !== '9') return (num = '.')
    return (num = '#')
  })
)

let basins = []
let sum = 0

const column = input.length
const row = input[0].length

const fill = (y, x, current, boundary) => {
  if (y < 0 || y >= column || x < 0 || x >= row) return
  if (input[y][x] !== current) return
  input[y][x] = boundary
  sum += 1
  fill(y + 1, x, current, boundary)
  fill(y - 1, x, current, boundary)
  fill(y, x + 1, current, boundary)
  fill(y, x - 1, current, boundary)
}

const findNextBoundary = symbol => {
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (input[i][j] === symbol) return [i, j]
    }
  }
}

const countSymbols = symbol => {
  let count = 0
  input.forEach(line =>
    line.forEach(space => {
      if (space === symbol) count += 1
    })
  )
  return count
}

while (countSymbols('.')) {
  sum = 0
  const index = findNextBoundary('.')
  fill(index[0], index[1], '.', '#')
  basins.push(sum)
}

basins.sort((a, b) => b - a)
console.log(basins[0] * basins[1] * basins[2])
