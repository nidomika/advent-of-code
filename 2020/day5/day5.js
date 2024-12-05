const fs = require('fs')

fs.readFile('day5_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n')
  const seats = input.map(seat => {
    let maxRow = 127
    let minRow = 0

    for (let i = 0; i < seat.length - 3; i++) {
      if (seat[i] === 'F') maxRow = Math.floor((maxRow + minRow) / 2)
      else minRow = Math.ceil((maxRow + minRow) / 2)
    }

    let maxCol = 7
    let minCol = 0
    for (let i = seat.length - 3; i < seat.length; i++) {
      if (seat[i] === 'L') maxCol = Math.floor((maxCol + minCol) / 2)
      else minCol = Math.ceil((maxCol + minCol) / 2)
    }

    const seatID = maxRow * 8 + maxCol

    return seatID
  })

  console.log(seats.sort((a, b) => b - a)[0])
  let number = 883
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] !== number) {
      console.log(number)
      break
    }
    number -= 1
  }
})
