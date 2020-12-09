const fs = require('fs')

fs.readFile('day9_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data
    .toString()
    .split('\r\n')
    .map(number => +number)

  // part 1

  const check = (ports, preamble) => {
    for (let i = 0; i < ports.length; i++) {
      let sortedSlice = ports.slice(i, preamble + i).sort((a, b) => a - b)
      let minSum = sortedSlice[0] + sortedSlice[1]
      let maxSum = sortedSlice[preamble - 2] + sortedSlice[preamble - 1]
      if (ports[preamble + i] > maxSum || ports[preamble + i] < minSum)
        return [ports[preamble + i], preamble + i]
    }
  }
  const part1 = check(input, 25)
  console.log(part1[0])

  // part 2

  const findWeakness = (ports, invalidNumber, startingIndex, endingIndex) => {
    let foundIndex = 0
    const a = ports
      .slice(startingIndex, endingIndex)
      .reduce((sum, currentValue, index, array) => {
        if (sum + currentValue >= invalidNumber) {
          array.splice(1)
          foundIndex = index + startingIndex
        }
        return (sum += currentValue)
      })
    if (a === invalidNumber) {
      const ą = ports.slice(startingIndex, foundIndex).sort((a, b) => a - b)
      return ą[0] + ą[ą.length - 1]
    } else return false
  }

  for (let i = 0; i < part1[1]; i++) {
    if (findWeakness(input, part1[0], i, part1[1]))
      console.log(findWeakness(input, part1[0], i, part1[1]))
  }
})
