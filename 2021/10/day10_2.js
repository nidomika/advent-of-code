import { readFileString } from '../functions.js'

const input = readFileString('10/day10_input.txt').map(line => line.split(''))

const leftBrackets = ['(', '[', '{', '<']
const rightBrackets = [')', ']', '}', '>']
const scores = [1, 2, 3, 4]

const index = (arr, bracket) => arr.findIndex(element => element === bracket)

const computeLineScore = arr => {
  let sum = 0
  arr.forEach(element => {
    sum *= 5
    sum += scores[index(rightBrackets, element)]
  })
  return sum
}

let totalScore = []

for (let i = 0; i < input.length; i++) {
  let queue = []
  let line = []

  for (let j = 0; j < input[i].length; j++) {
    const bracket = input[i][j]
    const leftIndex = index(leftBrackets, bracket)
    const rightIndex = index(rightBrackets, bracket)

    if (leftIndex !== -1) {
      queue.push(bracket)
    } else {
      if (index(leftBrackets, queue[queue.length - 1]) === rightIndex)
        queue.pop()
      else break
    }
    if (j === input[i].length - 1) {
      line = queue
        .reverse()
        .map(element => (element = rightBrackets[index(leftBrackets, element)]))
    }
  }
  if (line.length) totalScore.push(computeLineScore(line))
}

console.log(totalScore.sort((a, b) => a - b)[(totalScore.length - 1) / 2])
