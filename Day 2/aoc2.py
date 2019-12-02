file = open('aoc2.txt')
lines = file.read().split(',')
file.close()
tab = []
tab = []
tab2 = []
for number in lines:
    number = int(number)
    tab.append(number)
tab[1] = 12
tab[2] = 2

#pt1
i = 0
while (i < 129):
    pos1 = tab[i + 1]
    pos2 = tab[i + 2]
    pos3 = tab[i + 3]
    if (tab[i] == 1):
        tab[pos3] = tab[pos1] + tab[pos2]
    elif(tab[i] == 2):
        tab[pos3] = tab[pos1] * tab[pos2]
    elif(tab[i] == 99):
        break
    i += 4
print("output1:", tab[0])

#pt2
for numbern in range(100):
    for numberv in range(100):
        tab = []
        for number in lines:
            number = int(number)
            tab.append(number)
        tab[1] = numbern
        tab[2] = numberv
        i = 0
        while (i < 129):
            pos1 = tab[i + 1]
            pos2 = tab[i + 2]
            pos3 = tab[i + 3]
            if (tab[i] == 1):
                tab[pos3] = tab[pos1] + tab[pos2]
            elif (tab[i] == 2):
                tab[pos3] = tab[pos1] * tab[pos2]
            elif (tab[i] == 99):
                break
            i += 4
            if(tab[0] == 19690720):
                print("noun:", numbern, "verb:", numberv)
                output = 100 * numbern + numberv
                print("output2:", output)
                break
