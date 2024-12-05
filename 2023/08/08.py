import math
import re
from functions import read_input

lines = read_input()
instructions = lines[0]
network = sorted([re.split(r"\W+", line)[:3] for line in lines[2:]])


def find_element(node):
    for element in network:
        if element[0] == node:
            return element


def count_steps(current_node, part2=False):
    current = find_element(current_node)
    steps = 0
    while True:
        for instruction in instructions:
            steps += 1
            if instruction == "L":
                current = find_element(current[1])
            else:
                current = find_element(current[2])
            stop = current[0][2] == "Z" if part2 else current[0] == "ZZZ"
            if stop:
                return steps


part1 = count_steps("AAA")
print(part1)
all_A = list(filter(lambda node: node[0][2] == "A", network))

steps_needed = [count_steps(a[0], True) for a in all_A]
part2 = math.lcm(*steps_needed)
print(part2)
