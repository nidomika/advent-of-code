import { readFileString } from '../functions.js'

const input = readFileString('12/day12_input.txt').map(line => line.split('-'))

let caves = [...new Set(input.flatMap(pair => pair))].map(
  cave => (cave = { cave: cave, connected: new Set() })
)

const findCave = cave => caves.find(element => element.cave === cave)

input.forEach(pair => {
  findCave(pair[0]).connected.add(pair[1])
  findCave(pair[1]).connected.add(pair[0])
})

caves = caves.map(
  line => (line = { cave: line.cave, connected: [...line.connected] })
)

let count = 0

const bfs = start => {
  let queue = []
  queue.push([start], false)

  while (queue.length) {
    let current = queue.shift()
    let seenTwice = queue.shift()

    for (const neighbour of findCave(current[current.length - 1]).connected) {
      if (neighbour === 'end') {
        count += 1
      } else if (
        !current.includes(neighbour) ||
        neighbour === neighbour.toUpperCase()
      ) {
        queue.push([...current, neighbour], seenTwice)
      } else if (neighbour !== 'start' && !seenTwice) {
        queue.push([...current, neighbour], true)
      }
    }
  }
}

bfs('start')
console.log(count)
