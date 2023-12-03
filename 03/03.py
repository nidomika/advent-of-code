import re
from functions import read_input, multiply

lines = read_input()

number_positions = []
for y, line in enumerate(lines):
    numbers = re.findall(r'\d+', line)
    offset = 0
    for number in numbers:
        start_x = re.search(rf"\b{number}\b", line[offset:]).start() + offset
        end_x = start_x + len(number) - 1
        number_positions.append({"start_x": start_x, "end_x": end_x, "y": y, "number": int(number), "adjacent": False})
        offset = end_x

symbol_positions = []
for y, line in enumerate(lines):
    for x, symbol in enumerate(line):
        if not re.match(r'\d|\.', symbol):
            symbol_positions.append({"x": x, "y": y, "symbol": symbol, "adjacent_to": []})


# Part 1
def is_adjacent_to_symbol(coords, number_coords):
    possible_adjacent = []
    for coord in coords:
        if coord["y"] == number_coords["y"] or coord["y"] == number_coords["y"] + 1 or coord["y"] == number_coords["y"] - 1:
            possible_adjacent.append(coord)
    for coord in possible_adjacent:
        if number_coords["start_x"] - 1 <= coord["x"] <= number_coords["end_x"] + 1:
            coord["adjacent_to"].append(number_coords["number"])
            return True
    return False


for number in number_positions:
    number["adjacent"] = is_adjacent_to_symbol(symbol_positions, number)
print(sum([number["number"] for number in number_positions if number["adjacent"]]))


# Part 2
def calculate_gear_ratio(coords):
    gear_coords = [coord for coord in coords if coord["symbol"] == "*"]
    return sum([multiply(coord["adjacent_to"]) for coord in gear_coords if len(coord["adjacent_to"]) == 2])


print(calculate_gear_ratio(symbol_positions))
