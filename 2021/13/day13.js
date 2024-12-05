import { readFileString } from '../functions.js'

const input = readFileString('13/day13_input.txt')

const marks = input
  .filter(line => /\d+,\d+/.test(line))
  .map(line => line.split(',').map(el => +el))

const instructions = input
  .filter(line => /f/.test(line))
  .map(line => line.match(/(?<=g\s).*/)[0].split('='))

let maxX = 0
let maxY = 0

marks.forEach(pair => {
  if (pair[0] > maxX) maxX = pair[0]
  if (pair[1] > maxY) maxY = pair[1]
})

let paper = new Array(maxY + 1).fill('').map(el => new Array(maxX + 1).fill(0))

marks.forEach(pair => (paper[pair[1]][pair[0]] = 1))

const fold = (axis, value) => {
  if (axis === 'x') {
    paper.forEach(line => {
      for (let i = 0; i < value; i++) {
        line[i] = line[i] | line[line.length - 1 - i]
      }
    })
    return (paper = paper.map(line => line.splice(0, value)))
  } else {
    for (let i = 0; i < paper[0].length; i++) {
      for (let j = 0; j < value; j++) {
        paper[j][i] = paper[j][i] | paper[paper.length - 1 - j][i]
      }
    }
    return (paper = paper.splice(0, value))
  }
}

// part 1

fold(instructions[0][0], +instructions[0][1])
instructions.shift()

let sum = 0

paper.forEach(line => line.forEach(dot => (sum += dot)))
console.log(sum)

// part 2

instructions.forEach(instruction => fold(instruction[0], +instruction[1]))
console.log(
  paper.map(line => line.map(dot => (dot ? (dot = '█') : ' ')).join(''))
)
