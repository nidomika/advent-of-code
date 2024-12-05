import re
from functions import read_input


def decode(number):
    if number == "one":
        return "1"
    elif number == "two":
        return "2"
    elif number == "three":
        return "3"
    elif number == "four":
        return "4"
    elif number == "five":
        return "5"
    elif number == "six":
        return "6"
    elif number == "seven":
        return "7"
    elif number == "eight":
        return "8"
    elif number == "nine":
        return "9"
    return number


lines = read_input()

# Part 1
digits = [re.findall(r"\d", line) for line in lines]
part1 = sum([int(digit[0]+digit[-1]) for digit in digits])
print(part1)

# Part 2
digits2 = [re.findall(r"(?=(\d|one|two|three|four|five|six|seven|eight|nine))", line) for line in lines]
part2 = sum([int(decode(line[0])+decode(line[-1])) for line in digits2])
print(part2)
