import re
from functions import read_input

lines = read_input()
games = [[[cube.split(" ") for cube in hand.split(", ")] for hand in game.split("; ")]
         for game in (line.split(": ")[1] for line in lines)]


# Part 1
def is_possible_game(game):
    max_cubes = {
        "red": 12,
        "green": 13,
        "blue": 14,
    }

    for takeout in game:
        cubes = {
            "red": 0,
            "green": 0,
            "blue": 0,
        }

        for hand in takeout:
            if hand[1] == "red":
                cubes["red"] += int(hand[0])
            elif hand[1] == "green":
                cubes["green"] += int(hand[0])
            elif hand[1] == "blue":
                cubes["blue"] += int(hand[0])

        if cubes["red"] > max_cubes["red"] or cubes["green"] > max_cubes["green"] or cubes["blue"] > max_cubes["blue"]:
            return False

    return True


check_valid = [is_possible_game(game) for game in games]
part1 = sum([i+1 for i, game in enumerate(check_valid) if game])
print(part1)


# Part 2
def fewest_cubes(game):
    cubes = {
        "red": 0,
        "green": 0,
        "blue": 0,
    }

    for takeout in game:
        for hand in takeout:
            amount = int(hand[0])
            cube = hand[1]
            if cube == "red" and cubes["red"] < amount:
                cubes["red"] = amount
            elif cube == "green" and cubes["green"] < amount:
                cubes["green"] = amount
            elif cube == "blue" and cubes["blue"] < amount:
                cubes["blue"] = amount

    return cubes["red"] * cubes["green"] * cubes["blue"]


part2 = sum([fewest_cubes(game) for game in games])
print(part2)
