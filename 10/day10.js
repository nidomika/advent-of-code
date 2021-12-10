import { readFileString } from '../functions.js'

const input = readFileString('10/day10_input.txt').map(line => line.split(''))

const leftBrackets = ['(', '[', '{', '<']
const rightBrackets = [')', ']', '}', '>']
const scores = [3, 57, 1197, 25137]

const index = (arr, bracket) => arr.findIndex(element => element === bracket)

let syntaxErrorScore = 0

for (let i = 0; i < input.length; i++) {
  let queue = []

  for (let j = 0; j < input[i].length; j++) {
    const bracket = input[i][j]
    const leftIndex = index(leftBrackets, bracket)
    const rightIndex = index(rightBrackets, bracket)

    if (leftIndex !== -1) {
      queue.push(bracket)
    } else {
      if (index(leftBrackets, queue[queue.length - 1]) === rightIndex)
        queue.pop()
      else {
        syntaxErrorScore += scores[rightIndex]
        break
      }
    }
  }
}

console.log(syntaxErrorScore)
