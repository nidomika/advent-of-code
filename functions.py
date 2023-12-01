# read input from file
def read_input():
    return [line.rstrip() for line in open("input.txt")]


# read input from file and parse into a list of ints
def read_input_int():
    return [int(line.rstrip()) for line in open("input.txt")]
