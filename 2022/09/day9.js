import { readFileString } from '../functions.js'

const input = readFileString('input.txt').map(line => {
  line = line.split(' ')
  return [line[0], +line[1]]
})

const isInRange = (pos1, pos2) => {
  const dx = Math.abs(pos1.x - pos2.x)
  const dy = Math.abs(pos1.y - pos2.y)

  return dx + dy <= 1 || (dx + dy === 2 && dx <= 1 && dy <= 1)
}

const adjustPos = (head, tail) => {
  const dx = Math.abs(head.x - tail.x)
  const dy = Math.abs(head.y - tail.y)

  if (dy === 0) {
    head.x > tail.x ? (tail.x += 1) : (tail.x -= 1)
  } else if (dx === 0) {
    head.y > tail.y ? (tail.y += 1) : (tail.y -= 1)
  } else {
    if (head.x > tail.x && head.y > tail.y) {
      tail.x += 1
      tail.y += 1
    } else if (head.x > tail.x && head.y < tail.y) {
      tail.x += 1
      tail.y -= 1
    } else if (head.x < tail.x && head.y < tail.y) {
      tail.x -= 1
      tail.y -= 1
    } else if (head.x < tail.x && head.y > tail.y) {
      tail.x -= 1
      tail.y += 1
    }
  }

  return tail
}

const moveRope = (rope, instruction) => {
  const [dir, steps] = instruction
  let path = []
  let head = rope[0]

  for (let i = 1; i <= steps; i++) {
    switch (dir) {
      case 'U':
        head.y += 1
        break
      case 'D':
        head.y -= 1
        break
      case 'R':
        head.x += 1
        break
      case 'L':
        head.x -= 1
        break
    }

    for (let j = 0; j < rope.length - 1; j++) {
      if (!isInRange(rope[j], rope[j + 1])) {
        rope[j + 1] = adjustPos(rope[j], rope[j + 1])
      }
    }

    const knotToPush = { ...rope[rope.length - 1] }
    path = [...path, knotToPush]
  }
  return path
}

const removeDuplicates = objArr => {
  return objArr.filter(
    (value, index, self) =>
      index === self.findIndex(t => t.x === value.x && t.y === value.y)
  )
}

let rope1 = [...new Array(2)].map(() => ({ x: 0, y: 0 }))
let part1 = []

input.forEach(instr => part1.push(...moveRope(rope1, instr)))
part1 = removeDuplicates(part1).length
console.log(part1)

let rope2 = [...new Array(10)].map(() => ({ x: 0, y: 0 }))
let part2 = []

input.forEach(instr => part2.push(...moveRope(rope2, instr)))
part2 = removeDuplicates(part2).length
console.log(part2)
