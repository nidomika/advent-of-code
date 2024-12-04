file = open('aoc5.txt')
lines = file.read().split(',')
file.close()
tab = []
for number in lines:
    number = int(number)
    tab.append(number)

def intcode(tab, userInput):
    i = 0
    output = []
    while tab[i] != 99:
        opcode = tab[i] % 100
        first = (tab[i] // 100) % 10
        second = (tab[i] // 1000) % 10
        third = (tab[i] // 10000) % 10

        if first == 1:
            pos1 = i + 1
        else:
            pos1 = tab[i + 1]
        if second == 1:
            pos2 = i + 2
        else:
            pos2 = tab[i + 2]
        if third == 1:
            pos3 = i + 3
        else:
            pos3 = tab[i + 3]

        if opcode == 1:
            tab[pos3] = tab[pos1] + tab[pos2]
            i += 4
        elif opcode == 2:
            tab[pos3] = tab[pos1] * tab[pos2]
            i += 4
        elif opcode == 3:
            tab[pos1] = userInput
            i += 2
        elif opcode == 4:
            output.append(tab[pos1])
            i += 2
        elif opcode == 5: #jump-if-true
            if tab[pos1] != 0:
                i = tab[pos2]
            else:
                i += 3
        elif opcode == 6: #jump-if-false
            if tab[pos1] == 0:
                i = tab[pos2]
            else:
                i += 3
        elif opcode == 7: #less than
            if tab[pos1] < tab[pos2]:
                tab[pos3] = 1
            else:
                tab[pos3] = 0
            i += 4
        elif opcode == 8: #equals
            if tab[pos1] == tab[pos2]:
                tab[pos3] = 1
            else:
                tab[pos3] = 0
            i += 4
    return output

print(intcode(tab, 1))
print(intcode(tab, 5))
