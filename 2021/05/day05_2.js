import { readFileString } from '../functions.js'

let input = readFileString('05/day05_input.txt').map(line => line.split(' -> '))
input = input.map(pair => pair.map(point => point.split(',')))

let p = {
  points: [],
  overlap: []
}

const findPoint = point => {
  if (
    p.points.some(el => el[0] === point[0] && el[1] === point[1]) &&
    !p.overlap.some(el => el[0] === point[0] && el[1] === point[1])
  ) {
    p.overlap.push(point)
  } else {
    p.points.push(point)
  }
}

input.forEach(pair => {
  const x1 = +pair[0][0]
  const x2 = +pair[1][0]
  const y1 = +pair[0][1]
  const y2 = +pair[1][1]

  const distX = Math.abs(x2 - x1)
  const distY = Math.abs(y2 - y1)
  let point = []

  if (x1 === x2 || y1 === y2) {
    if (distX > distY) {
      for (let i = 0; i <= distX; i++) {
        x1 < x2 ? (point = [x1 + i, y1]) : (point = [x2 + i, y1])
        findPoint(point)
      }
    } else {
      for (let i = 0; i <= distY; i++) {
        y1 < y2 ? (point = [x1, y1 + i]) : (point = [x2, y2 + i])
        findPoint(point)
      }
    }
  } else {
    if (x1 < x2) {
      for (let i = 0; i <= distX; i++) {
        y1 < y2 ? (point = [x1 + i, y1 + i]) : (point = [x1 + i, y1 - i])
        findPoint(point)
      }
    } else {
      for (let i = 0; i <= distX; i++) {
        y1 < y2 ? (point = [x2 + i, y2 - i]) : (point = [x2 + i, y2 + i])
        findPoint(point)
      }
    }
  }
})

console.log(p.overlap.length)
