from functions import read_input
lines = read_input()
histories = [list(map(int, line.split())) for line in lines]


def extrapolate(histories):
    next_values = []
    for history in histories:
        sequence = list(history)
        last_values = []
        while sequence:
            sequence = [sequence[i+1] - sequence[i] for i in range(len(sequence) - 1)]
            if sequence:
                last_values.insert(0, sequence[-1])
        next_value = sum(last_values[::-1]) + history[-1]
        next_values.append(next_value)
    return sum(next_values)


part1 = extrapolate(histories)
print(part1)

reversed_histories = [list(reversed(history)) for history in histories]
part2 = extrapolate(reversed_histories)
print(part2)
