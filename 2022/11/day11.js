import { divideArrayToEqualParts, readFileString } from '../functions.js'

let input = divideArrayToEqualParts(
  readFileString('input.txt')
    .map(line => {
      line = line.split(/\s+|\:|\,/)
      return line.filter(a => a !== '')
    })
    .filter(a => a.length > 0),
  6
)

const monkeys1 = input.map(monke => {
  const number = +monke[0][1]
  const items = monke[1].slice(2).map(Number)
  const operation = monke[2].slice(3).join(' ')
  const test = +monke[3][3]
  const ifTrue = +monke[4][5]
  const ifFalse = +monke[5][5]
  const inspected = 0
  return { number, items, operation, test, ifTrue, ifFalse, inspected }
})

const monkeys2 = JSON.parse(JSON.stringify(monkeys1))

let divisors = 1
monkeys1.forEach(monke => (divisors *= monke.test))

const yeet = (monkeys, part) => {
  const rounds = part === 2 ? 10000 : 20
  for (let i = 0; i < rounds; i++) {
    monkeys.forEach(monke => {
      for (let i = 0; i < monke.items.length; i++) {
        const old = monke.items[i] % divisors
        const worry =
          part === 2
            ? eval(monke.operation)
            : Math.floor(eval(monke.operation) / 3)
        if (worry % monke.test === 0) {
          monkeys.find(m => m.number === monke.ifTrue).items.push(worry)
        } else {
          monkeys.find(m => m.number === monke.ifFalse).items.push(worry)
        }
        monke.inspected++
      }
      monke.items = []
    })
  }
  monkeys.sort((a, b) => b.inspected - a.inspected)
  return monkeys[0].inspected * monkeys[1].inspected
}

console.log(yeet(monkeys1, 1))
console.log(yeet(monkeys2, 2))
