from functions import read_input

lines = read_input()

cards = []
for i, line in enumerate(lines):
    line = [set.split() for set in line.split(":")[1].split("|")]
    my_numbers, winning_numbers = map(lambda x: set(map(int, x)), line)
    matches = len(my_numbers & winning_numbers)
    score = 2**(matches - 1) if matches > 0 else 0

    cards.append([1, matches, score])

# Part 1
part1 = sum([card[2] for card in cards])
print(part1)


# Part 2
def copy_cards(cards):
    for i, card in enumerate(cards):
        matches = card[1]
        if matches == 0:
            continue

        for current in range(i + 1, i + 1 + matches):
            cards[current][0] += card[0]
    return


copy_cards(cards)

part2 = sum([card[0] for card in cards])
print(part2)
