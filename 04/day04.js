import { readFileString, superslice } from '../functions.js'

let input = readFileString('04/day04_input.txt')

const winningNumbers = input[0].split(',')

let boards = input.slice(2).map(line => line.split(/\s+/))
boards.map(line => {
  if (line[0] === '') line.shift()
})
boards = boards.filter(line => line.length)
boards = superslice(boards, 5)

let superExtraCopyOfBoards = boards

let win = false
let sum = 0

for (let num of winningNumbers) {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i]

    for (let j = 0; j < board.length; j++) {
      for (let k = 0; k < board[0].length; k++) {
        if (board[j][k] === num) {
          board[j][k] = 'x'
          let col = board.map(line => line[k])
          if (
            board[j].every(number => number === 'x') ||
            col.every(number => number === 'x')
          ) {
            win = true
            break
          }
        }
      }
      if (win) {
        for (let j = 0; j < board.length; j++) {
          for (let k = 0; k < board[0].length; k++) {
            if (!Number.isNaN(+board[j][k])) {
              sum += +board[j][k]
            }
          }
        }
        sum *= +num
        break
      }
    }
    if (win) break
  }
  if (win) break
}

console.log(sum)

let winArray = Array(boards.length).fill(false)
sum = 0
boards = [...superExtraCopyOfBoards]

for (let num of winningNumbers) {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i]

    for (let j = 0; j < board.length; j++) {
      for (let k = 0; k < board[0].length; k++) {
        if (board[j][k] === num) {
          board[j][k] = 'x'
          let col = board.map(line => line[k])
          if (
            board[j].every(number => number === 'x') ||
            col.every(number => number === 'x')
          ) {
            winArray[i] = true
            break
          }
        }
        if (winArray[i] === true) break
      }
      if (winArray.every(val => val === true)) {
        for (let j = 0; j < board.length; j++) {
          for (let k = 0; k < board[0].length; k++) {
            if (!Number.isNaN(+board[j][k])) {
              sum += +board[j][k]
            }
          }
        }
        sum *= +num
        break
      }
    }
    if (winArray.every(val => val === true)) break
  }
  if (winArray.every(val => val === true)) break
}

console.log(sum)
