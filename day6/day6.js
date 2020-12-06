const fs = require('fs')

fs.readFile('day6_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n\r\n')

  input.forEach((element, index) => {
    input[index] = element.split('\r\n')
  })

  let uniqueAnswers = 0
  let sameAnswer = 0
  input.forEach(group => {
    let answers = {}
    group.map(person => {
      for (let i = 0; i < person.length; i++) {
        let answer = person[i]
        let count = answers[answer]
        answers[answer] = count ? count + 1 : 1
      }
    })
    uniqueAnswers += Object.keys(answers).length

    for (const answer in answers) {
      if (answers[answer] === group.length) sameAnswer++
    }
  })
  console.log(uniqueAnswers, sameAnswer)
})
