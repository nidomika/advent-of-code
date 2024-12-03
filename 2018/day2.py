file = open("day2.txt")
ids = [ident for ident in file.read().split()]
file.close()

# pt 1

count2 = 0
count3 = 0
for word in ids:
  letterCount = {}
  for letter in word:
    letterCount[letter] = letterCount.get(letter, 0) + 1
  found2 = False
  found3 = False
  for value in letterCount.values():
    if found2 == False and value == 2:
      found2 = True
      count2 += 1
    if found3 == False and value == 3:
      found3 = True
      count3 += 1
    if found2 and found3: 
      break

print(count2 * count3)

# pt 2
letterCount = {}
for word in ids:
  for letter in word:
    letterCount[letter] = letterCount.get(letter, 0) + 1