const fs = require('fs')

fs.readFile('day10_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.split('\r\n').map(number => +number)
  input.sort((a, b) => a - b).push
  input.push(input[input.length - 1] + 3)
  input.unshift(0)

  // part 1

  let count1 = 0
  let count3 = 0
  for (let i = 1; i < input.length; i++) {
    if (input[i] - input[i - 1] === 1) count1 += 1
    if (input[i] - input[i - 1] === 3) count3 += 1
  }
  console.log(count1 * count3)
})
