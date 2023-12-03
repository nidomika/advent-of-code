# read input from file
def read_input():
    return [line.rstrip() for line in open("input.txt")]


# read input from file and parse into a list of ints
def read_input_int():
    return [int(line.rstrip()) for line in open("input.txt")]


# multiply all digits in a list
def multiply(int_list):
    result = 1
    for digit in int_list:
        result *= digit
    return result
