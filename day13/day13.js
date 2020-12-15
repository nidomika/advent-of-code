const fs = require('fs')

fs.readFile('day13_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.split('\r\n').map(line => line.split(','))

  const part1 = input => {
    const arrival = input[0]
    const buses = input[1]
    let wait = 1000

    for (let id of buses) {
      if (id === 'x') continue
      else {
        id = +id
        let timestamp = ~~(arrival / id) * id + id
        if (timestamp - arrival < wait) {
          wait = timestamp - arrival
          answer = wait * id
        }
      }
    }
    return console.log(answer)
  }

  // const part2 = input => {}
})
