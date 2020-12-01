fs = require('fs')

fs.readFile('day1/day1_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.split('\r\n').map(element => +element)
  input.sort((a, b) => a - b)

  // part 1

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length - i - 1; j++) {
      if (input[i] + input[j] === 2020) {
        console.log(input[i] * input[j])
        break
      }
    }
  }

  // part 2

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length - i - 1; j++) {
      for (let k = j + 1; k < input.length - j; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          console.log(input[i] * input[j] * input[k])
          break
        }
      }
    }
  }
})
