file = open("day1.txt")
changes = [int(number) for number in file.read().split()]
file.close()

# pt 1

print("frequency: {}".format(sum(changes))) 

# pt 2

freqList = []
curFreq = 0

while curFreq not in freqList:
  for element in changes:
    freqList.append(curFreq)
    curFreq += element
    # print("elo")
    if curFreq in freqList:
      # print("deduwa")
      print("frequency again: {}".format(curFreq))
      break
