import { readFileString } from '../functions.js'

const input = readFileString('08/day08_input.txt')

let part1 = 0

let outputValues = input
  .map(line => line.split(' | ')[1])
  .map(line => line.split(' ').map(digit => digit.split('').sort().join('')))

let signalValues = input
  .map(line => line.split(' | ')[0])
  .map(line => line.split(' ').map(digit => digit.split('').sort().join('')))

outputValues.forEach(line => {
  line.forEach(digit => {
    if ([2, 4, 3, 7].includes(digit.length)) part1 += 1
  })
})

console.log(part1)

const findNumbers = (line, len) =>
  line.filter(element => element.length === len)

const contain = (word1, word2) => {
  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) === -1) return false
  }
  return true
}

const decode = (line, key) => {
  let number = ''
  line.forEach(digit => {
    number += key.indexOf(digit)
  })
  return +number
}

let part2 = 0

signalValues.forEach((line, i) => {
  let display = new Array(10).fill('')

  display[1] = findNumbers(line, 2)[0]
  display[4] = findNumbers(line, 4)[0]
  display[7] = findNumbers(line, 3)[0]
  display[8] = findNumbers(line, 7)[0]

  findNumbers(line, 6).forEach(digit => {
    if (contain(digit, display[4])) display[9] = digit
    else if (contain(digit, display[1])) display[0] = digit
    else display[6] = digit
  })

  findNumbers(line, 5).forEach(digit => {
    if (contain(digit, display[7])) display[3] = digit
    else if (contain(display[6], digit)) display[5] = digit
    else display[2] = digit
  })

  part2 += decode(outputValues[i], display)
})

console.log(part2)
