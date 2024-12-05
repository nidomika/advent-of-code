import { readFileString } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(''))[0]

const findMarker = (message, length) => {
  for (let i = 0; i < message.length; i++) {
    let marker = i + length
    let slice = message.slice(i, marker)
    let sliceSet = new Set(slice)

    if (slice.length === sliceSet.size) return marker
  }
}

console.log(findMarker(input, 4))
console.log(findMarker(input, 14))
