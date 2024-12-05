import { readFileString, readFileInt } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(''))

// PART 1

const compartments = input.map(line => {
  const middleIndex = line.length / 2
  const firstHalf = line.slice().splice(0, middleIndex)
  const secondHalf = line.slice().splice(-middleIndex)

  return [firstHalf, secondHalf]
})

const intersections = compartments.map(ar => {
  const filteredArray = ar[0].filter(value => ar[1].includes(value))
  return filteredArray[0]
})

const countPoints = letter => {
  const ascii = letter.charCodeAt(0)
  return /[A-Z]/.test(letter) ? ascii - 38 : ascii - 96
}

const points = intersections.map(letter => countPoints(letter))
const sum = points.reduce((partialSum, a) => partialSum + a, 0)

console.log(sum)

// PART 2

const intersectionGroups = []

for (let i = 0; i < input.length; i += 3) {
  const elf1 = input[i]
  const elf2 = input[i + 1]
  const elf3 = input[i + 2]

  const intersection = [elf1, elf2, elf3].reduce((a, b) =>
    a.filter(c => b.includes(c))
  )

  intersectionGroups.push(intersection)
}

const points2 = intersectionGroups.map(group => countPoints(group[0]))
const sum2 = points2.reduce((partialSum, a) => partialSum + a, 0)

console.log(sum2)
