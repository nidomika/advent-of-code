def intcode(tab, userInput):
    pos1, pos2, pos3 = 0, 0, 0
    i = 0
    relativeBase = 0
    output = []
    for k in range(10000):  # not so proud of extending the size of a list like this xD
        tab.append(0)
    while tab[i] != 99:
        opcode = tab[i] % 100
        first = (tab[i] // 100) % 10
        second = (tab[i] // 1000) % 10
        third = (tab[i] // 10000) % 10

        if first == 0:  # POSITION
            pos1 = tab[i + 1]
        elif first == 1:  # IMMEDIATE
            pos1 = i + 1
        elif first == 2:  # RELATIVE
            pos1 = tab[i + 1] + relativeBase

        if second == 0:
            pos2 = tab[i + 2]
        elif second == 1:
            pos2 = i + 2
        elif second == 2:
            pos2 = tab[i + 2] + relativeBase

        if third == 0:
            pos3 = tab[i + 3]
        elif third == 1:
            pos3 = i + 3
        elif third == 2:
            pos3 = tab[i + 3] + relativeBase
        if pos3 < 0:
            pos3 = 0

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
        elif opcode == 5:
            if tab[pos1] != 0:
                i = tab[pos2]
            else:
                i += 3
        elif opcode == 6:
            if tab[pos1] == 0:
                i = tab[pos2]
            else:
                i += 3
        elif opcode == 7:
            if tab[pos1] < tab[pos2]:
                tab[pos3] = 1
            else:
                tab[pos3] = 0
            i += 4
        elif opcode == 8:
            if tab[pos1] == tab[pos2]:
                tab[pos3] = 1
            else:
                tab[pos3] = 0
            i += 4
        elif opcode == 9:  # OFFSET
            relativeBase += tab[pos1]
            i += 2
    return output


file = open('aoc9.txt')
lines = file.read().split(',')
file.close()
program = []
for number in lines:
    number = int(number)
    program.append(number)

print(intcode(program, 1))  # pt1
print(intcode(program, 2)) # pt2, 64236
