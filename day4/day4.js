fs = require('fs')

fs.readFile('day4_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n\r\n')

  input.forEach((element, index) => {
    input[index] = element.split(/\r\n|\s/).reduce((obj, item) => {
      let [key, value] = item.split(':')
      obj[key] = value
      return obj
    }, {})
  })

  let counter = 0
  let counter2 = 0

  const isCorrect = obj => {
    const height = +obj.hgt.match(/[0-9]*/)
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

    if (!(+obj.byr >= 1920 && +obj.byr <= 2002)) return false
    if (!(+obj.iyr >= 2010 && +obj.iyr <= 2020)) return false
    if (!(+obj.eyr >= 2020 && +obj.eyr <= 2030)) return false

    if (obj.hgt[obj.hgt.length - 1] === 'm') {
      if (!(height >= 150 && height <= 193)) return false
    } else if (obj.hgt[obj.hgt.length - 1] === 'n') {
      if (!(height >= 59 && height <= 76)) return false
    } else return false

    if (!/#([a-f0-9]{6})/.test(obj.hcl)) return false
    if (!eyeColors.includes(obj.ecl)) return false
    if (obj.pid.length !== 9) return false
    return true
  }

  input.forEach(element => {
    if (
      Object.keys(element).length === 8 ||
      (Object.keys(element).length === 7 && !element['cid'])
    ) {
      counter++
      if (isCorrect(element)) counter2++
    }
  })

  console.log(counter, counter2)
})
