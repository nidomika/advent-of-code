fs = require('fs')

fs.readFile('day3_input.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const input = data.toString().split('\r\n')

  // part 1 & 2

  const slope = (map, right, down) => {
    let pointer = 0
    let trees = 0

    for (let i = 0; i < map.length; i += down) {
      if (!map[i][pointer]) pointer -= map[i].length
      if (map[i][pointer] === '#') trees++
      pointer += right
    }
    return trees
  }

  const treesEncountered = slope(input, 3, 1)
  const slopesProduct =
    slope(input, 1, 1) *
    slope(input, 5, 1) *
    slope(input, 7, 1) *
    slope(input, 1, 2) *
    treesEncountered

  console.log(treesEncountered, slopesProduct)
})
