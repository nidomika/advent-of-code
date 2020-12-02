fs = require('fs')

fs.readFile('day2_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data
    .toString()
    .split('\r\n')
    .map(element => element.split(' '))
  let counter = 0
  let counter2 = 0
  for (let i = 0; i < input.length; i++) {
    const range = input[i][0].split('-').map(element => +element)
    const letter = input[i][1].slice(0, -1)
    const password = input[i][2]

    // part 1

    const check = new RegExp(letter, 'g')

    const occurrencies = password.match(check)
      ? password.match(check).length
      : 0

    if (range[0] <= occurrencies && occurrencies <= range[1]) counter++

    // part 2

    const position1 = password.charAt(range[0] - 1) === letter
    const position2 = password.charAt(range[1] - 1) === letter
    if (position1 !== position2) counter2++
  }
  console.log(counter)
  console.log(counter2)
})
