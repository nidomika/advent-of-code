file = open('aoc3.txt')
lines = file.read().split()
file.close()
wires = []
for number in lines:
    wires.append(number)
wires = [x.split(',') for x in wires]

#wires = [['R75','D30','R83','U83','L12','D49','R71','U7','L72'],['U62','R66','U55','R34','D71','R55','D58','R83']]

def manhattan_distance(point):
    return sum(map(abs, point))

def move(wire):
    x = 0
    y = 0
    j = 1
    path = {}
    path1 = [[],[]]
    for instruction in wire:
        distance = int(instruction[1:])
        for step in range(distance):
            if instruction[0] == 'R':
                x += 1
            elif instruction[0] == 'L':
                x -= 1
            elif instruction[0] == 'U':
                y += 1
            elif instruction[0] == 'D':
                y -= 1
            path[x, y] = j
            j += 1
    return path

wire1 = move(wires[0])
wire2 = move(wires[1])
intersections = set(move(wires[0])).intersection(set(move(wires[1])))



manhattan = {
    manhattan_distance(point): wire1[point] + wire2[point]
    for point in intersections
}

print(min(manhattan.keys()))
print(min(manhattan.values()))
