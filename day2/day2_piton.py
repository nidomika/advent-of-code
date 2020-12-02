data = []
counter = 0
counter2 = 0

with open('day2_input.txt') as a:
  for line in a:
    data.append(line.strip().split(' '))

for line in data:
  numbers = list(map(int, line[0].split('-')))
  key = line[1][:-1]
  password = line[2]

  # part 1

  occurrencies = 0

  for letter in password:
    if letter == key: occurrencies += 1
  
  if numbers[0] <= occurrencies <= numbers[1]: counter += 1

  # part 2
  
  position1 = password[numbers[0] - 1] == key
  position2 = password[numbers[1] - 1] == key
  if position1 != position2: counter2 += 1

print(counter, counter2)