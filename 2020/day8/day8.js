const fs = require('fs')

fs.readFile('day8_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n')
  const instructions = input.map(line => {
    line = line.split(' ')
    line[1] = +line[1]
    return line
  })

  const compute = instructions => {
    let accumulator = 0
    let i = 0
    const visited = []
    while (true) {
      const instruction = instructions[i][0]
      const number = instructions[i][1]

      if (instruction === 'acc') {
        accumulator += number
        i += 1
      } else if (instruction === 'jmp') {
        i += number
      } else i += 1
      if (visited.some(number => number === i)) break
      visited.push(i)
      if (i >= instructions.length)
        return console.log(
          'aaaaaaaaaaaaaaaaaaaaaaaaaa',
          accumulator,
          'aaaaaaaaaaaaaaaaaaaaaaaaaa'
        )
    }

    return console.log(accumulator)
  }
  // part 1
  compute(instructions)

  // part 2 XD

  const affected = []
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i][0] === 'nop')
      affected.push([i, ['jmp', instructions[i][1]]])
    else if (instructions[i][0] === 'jmp')
      affected.push([i, ['nop', instructions[i][1]]])
  }

  for (const element of affected) {
    const newInstructions = instructions.map((instruction, index) => {
      if (index === element[0]) instruction = element[1]
      return instruction
    })
    compute(newInstructions)
  }
})
