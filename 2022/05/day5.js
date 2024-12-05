import {
  readFileString,
  divideArrayToEqualParts,
  rotateLeft
} from '../functions.js'

const input = readFileString('input.txt')

const initialHeight = 8

const tower = input
  .slice(0, initialHeight)
  .map(
    line =>
      (line = divideArrayToEqualParts(line.split(''), 4).map(arr =>
        arr.filter(item => /[A-Z]/.test(item))
      ))
  )

const instructions = input.slice(initialHeight + 2).map(line =>
  line
    .split(' ')
    .filter(item => /\d+/g.test(item))
    .map(Number)
)

const createStacks = () =>
  rotateLeft(tower).map(a => a.filter(ar => ar.length > 0).flatMap(a => a))

const topStacks = stacks => stacks.map(arr => arr[arr.length - 1]).join('')

let queues = createStacks()
let queues2 = createStacks()

instructions.forEach(instruction => {
  const n = instruction[0]
  const from = instruction[1] - 1
  const to = instruction[2] - 1

  for (let i = 0; i < n; i++) {
    queues[to].push(queues[from].pop())
  }

  let thisPartStays = queues2[from].splice(0, queues2[from].length - n)
  queues2[to].push(...queues2[from])
  queues2[from] = thisPartStays
})

console.log(topStacks(queues))
console.log(topStacks(queues2))
