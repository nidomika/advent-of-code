from functions import read_input, multiply

lines = read_input()

records = [list(map(int, line.split()[1:])) for line in lines]

def beat_record(records):
    ways_to_win = []
    times, distances = records
    for time, distance in zip(times, distances):
        beat_counter = 0
        speed = 1
        while time - speed > 0:
            possible_best = (time - speed) * speed
            if possible_best > distance:
                beat_counter += 1
            speed += 1
        ways_to_win.append(beat_counter)
    return multiply(ways_to_win)

part1 = beat_record(records)
print(part1)

one_record = [[int("".join(map(str, list)))] for list in records]
part2 = beat_record(one_record)
print(part2)
