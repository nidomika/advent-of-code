import { readFileString, getColumn } from '../functions.js'

const input = readFileString('input.txt').map(line =>
  line.split('').map(Number)
)

const isVisible = (tree, i, j) => {
  const column = getColumn(input, j)
  const row = input[i]
  const top = column.slice(0, i).every(a => a < tree)
  const down = column.slice(i + 1, column.length).every(a => a < tree)
  const left = row.slice(0, j).every(a => a < tree)
  const right = row.slice(j + 1, row.length).every(a => a < tree)

  return top || down || left || right
}

let count = 0

for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input[i].length - 1; j++) {
    const tree = input[i][j]
    if (isVisible(tree, i, j)) count++
  }
}

const border = 2 * input[0].length + 2 * input.length - 4

const part1 = count + border
console.log(part1)

const calcScenic = (tree, i, j) => {
  const column = getColumn(input, j)
  const row = input[i]

  const top = column.slice(0, i).reverse()
  const down = column.slice(i + 1, column.length)
  const left = row.slice(0, j).reverse()
  const right = row.slice(j + 1, row.length)

  let topS = 0
  let downS = 0
  let leftS = 0
  let rightS = 0

  for (let k = 0; k < top.length; k++) {
    topS++
    if (tree <= top[k]) break
  }

  for (let k = 0; k < left.length; k++) {
    leftS++
    if (tree <= left[k]) break
  }

  for (let k = 0; k < down.length; k++) {
    downS++
    if (tree <= down[k]) break
  }

  for (let k = 0; k < right.length; k++) {
    rightS++
    if (tree <= right[k]) break
  }

  return topS * downS * leftS * rightS
}

let part2 = 0

for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input[j].length - 1; j++) {
    const tree = input[i][j]
    const score = calcScenic(tree, i, j)
    if (score > part2) part2 = score
  }
}

console.log(part2)
