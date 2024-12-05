const fs = require('fs')

fs.readFile('day11_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n')

  const countOccupied = map => {
    let l = 0
    map.forEach(line => {
      l += (line.match(/\#/g) || []).length
    })
    return l
  }

  const takeASeat = input => {
    let newLayout = input

    for (let i = 0; i < 100; i++) {
      let newNewLayout = []
      for (let y = 0; y < newLayout.length; y++) {
        let newLine = ''
        for (let x = 0; x < newLayout[0].length; x++) {
          occupied = 0
          if (newLayout[y][x] === 'L' || newLayout[y][x] === '#') {
            if (y > 0 && newLayout[y - 1][x] === '#') occupied += 1
            if (y > 0 && x > 0 && newLayout[y - 1][x - 1] === '#') occupied += 1
            if (
              y > 0 &&
              x < newLayout[0].length - 1 &&
              newLayout[y - 1][x + 1] === '#'
            )
              occupied += 1
            if (x > 0 && newLayout[y][x - 1] === '#') occupied += 1
            if (x < newLayout[0].length - 1 && newLayout[y][x + 1] === '#')
              occupied += 1
            if (y < newLayout.length - 1 && newLayout[y + 1][x] === '#')
              occupied += 1
            if (
              y < newLayout.length - 1 &&
              x > 1 &&
              newLayout[y + 1][x - 1] === '#'
            )
              occupied += 1
            if (
              y < newLayout.length - 1 &&
              x < newLayout[0].length &&
              newLayout[y + 1][x + 1] === '#'
            )
              occupied += 1

            if (newLayout[y][x] === 'L') {
              if (occupied === 0) newLine += '#'
              else newLine += 'L'
            } else {
              if (occupied >= 4) newLine += 'L'
              else newLine += '#'
            }
          } else newLine += '.'
        }
        newNewLayout.push(newLine)
      }
      newLayout = newNewLayout
      console.log(countOccupied(newLayout))
    }
  }
  takeASeat(input)
})
