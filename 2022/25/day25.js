import { readFileString, arraySum } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(''))

const SNAFU = { 2: 2, 1: 1, 0: 0, '-': -1, '=': -2 }
const reverseSNAFU = { 0: '=', 1: '-', 2: 0, 3: 1, 4: 2 }

const convertFromSNAFU = arr => {
  const SNAFUd = []
  arr.forEach(number => {
    const converted = []
    number.forEach(digit => converted.push(SNAFU[digit]))
    SNAFUd.push(
      converted.reduce((val, d, i, arr) => {
        return val + Math.pow(5, arr.length - i - 1) * d
      }, 0)
    )
  })
  return SNAFUd
}

const convertToSNAFU = num => {
  const x = []
  while (num !== 0) {
    const remainder = (num + 2) % 5
    num = Math.floor((num + 2) / 5)
    x.push(reverseSNAFU[remainder])
  }
  return x.reverse().join('')
}

const sum = arraySum(convertFromSNAFU(input))
console.log(sum)

console.log(convertToSNAFU(sum))
