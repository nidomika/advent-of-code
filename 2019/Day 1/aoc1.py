file = open('aoc1.txt')
lines = file.readlines()
file.close()
lines = list(map(int, lines))

#pt1
sum = 0

for line in lines:
    sum += (line//3 - 2)

print(sum)

#pt2
sumFuel = 0
for line in lines:
    sumPartFuel = 0
    partFuel = line
    while (partFuel > 0):
        partFuel = partFuel//3 - 2
        if(partFuel < 0):
            break
        sumPartFuel += partFuel
    sumFuel += sumPartFuel
print(sumFuel)

