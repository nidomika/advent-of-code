import { divideArrayToEqualParts, readFileString } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(' '))

let cycle = 0
let X = 1
let part1 = 0
let importantCycles = [20, 60, 100, 140, 180, 220]

input.forEach(instr => {
  if (instr[0] === 'noop') {
    cycle += 1
    if (importantCycles.includes(cycle)) {
      part1 += cycle * X
    }
  } else {
    let val = +instr[1]

    for (let i = 0; i < 2; i++) {
      cycle += 1
      if (importantCycles.includes(cycle)) {
        part1 += cycle * X
      }
    }
    X += val
  }
})
console.log(part1)

cycle = 1
X = 1
let line = []

const draw = (cycle, X) => {
  const pos = (cycle % 40) - 1 === -1 ? 39 : (cycle % 40) - 1 // there is something wrong with this but it works
  if (X - 1 === pos || X === pos || X + 1 === pos) {
    line.push('#')
  } else {
    line.push('.')
  }
}

input.forEach(instr => {
  if (instr[0] === 'noop') {
    draw(cycle, X)
    cycle += 1
  } else {
    let val = +instr[1]

    for (let i = 0; i < 2; i++) {
      draw(cycle, X)
      cycle += 1
    }
    X += val
  }
})

console.log(
  divideArrayToEqualParts(line, 40)
    .map(arr => arr.join(''))
    .join('\n')
)
