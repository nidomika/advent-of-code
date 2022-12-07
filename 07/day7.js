import { readFileString } from '../functions.js'

const input = readFileString('input.txt').map(line => line.split(' '))

let part1 = 0

let path = []
let folders = []
const files = {}

for (let i = 0; i < input.length; i++) {
  const line = input[i]
  if (line[1] === 'cd') {
    if (line[2] === '..') {
      path.pop()
    } else {
      path.push(line[2])
    }
    folders = [...folders, [...path]]
  } else if (line[1] === 'ls') {
    continue
  } else {
    let [size, name] = line
    if (size === 'dir') continue
    size = +size
    const pathToFile = [...path, name]
    files[pathToFile.join('/')] = size
  }
}

folders = [...new Set(folders.map(folder => folder.join('/')))]

const folderSizes = []
folders.forEach(folder => {
  let folderSize = 0
  for (const path in files) {
    if (path.startsWith(folder + '/')) {
      folderSize += files[path]
    }
  }
  folderSizes.push(folderSize)
})

folderSizes.forEach(size => {
  if (size <= 100000) part1 += size
})

console.log(part1)

folderSizes.sort((a, b) => a - b)

const total = 70000000
const required = 30000000
const taken = folderSizes[folderSizes.length - 1]
const free = total - taken

const part2 = folderSizes.filter(folder => free + folder > required)[0]

console.log(part2)
