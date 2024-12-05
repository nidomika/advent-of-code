const fs = require('fs')

fs.readFile('day12_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data
    .toString()
    .split('\r\n')
    .map(line => [line[0], +line.slice(1)])

  const move = instructions => {
    let facing = 90
    let x = 0
    let y = 0
    let distance = 0

    for (const instruction of instructions) {
      if (instruction[0] === 'N') y += instruction[1]
      else if (instruction[0] === 'S') y -= instruction[1]
      else if (instruction[0] === 'E') x += instruction[1]
      else if (instruction[0] === 'W') x -= instruction[1]
      else if (instruction[0] === 'L') {
        facing -= instruction[1]
        if (facing < 0) facing += 360
      } else if (instruction[0] === 'R') {
        facing += instruction[1]
        if (facing > 360) facing -= 360
      } else {
        if (facing === 0 || facing === 360) y += instruction[1]
        else if (facing === 90) x += instruction[1]
        else if (facing === 180) y -= instruction[1]
        else if (facing === 270) x -= instruction[1]
      }
    }
    distance = Math.abs(x) + Math.abs(y)
    console.log(distance)
  }

  // something is not yes
  // const changePos = (x, y, quadrant) => {
  //   if (quadrant === 0 || quadrant === 360) return [x, y]
  //   else if (quadrant === 90) y = -y
  //   else if (quadrant === 180) {
  //     x = -x
  //     y = -y
  //   } else if (quadrant === 270) x = -x
  //   return [x, y]
  // }

  // const correctMove = instructions => {
  //   let quadrant = 0
  //   let xShip = 0
  //   let yShip = 0
  //   let xWaypoint = 10
  //   let yWaypoint = 1
  //   let distance = 0
  //   let newPos = []

  //   for (const instruction of instructions) {
  //     if (instruction[0] === 'N') yWaypoint += instruction[1]
  //     else if (instruction[0] === 'S') yWaypoint -= instruction[1]
  //     else if (instruction[0] === 'E') xWaypoint += instruction[1]
  //     else if (instruction[0] === 'W') xWaypoint -= instruction[1]
  //     else if (instruction[0] === 'L') {
  //       quadrant -= instruction[1]
  //       if (quadrant > 360) quadrant -= 360
  //       newPos = changePos(xWaypoint, yWaypoint, quadrant)
  //       xWaypoint = newPos[0]
  //       yWaypoint = newPos[1]
  //     } else if (instruction[0] === 'R') {
  //       quadrant += instruction[1]
  //       if (quadrant > 360) quadrant -= 360
  //       newPos = changePos(xWaypoint, yWaypoint, quadrant)
  //       xWaypoint = newPos[0]
  //       yWaypoint = newPos[1]
  //     } else {
  //       xShip += instruction[1] * xWaypoint
  //       yShip += instruction[1] * yWaypoint
  //     }
  //     console.log({ xShip, yShip })
  //   }
  //   distance = Math.abs(xShip) + Math.abs(yShip)
  //   console.log(distance)
  // }

  move(input)
  // correctMove(input)
})
