password = [2, 2, 2, 2, 2, 2]
listOfPasswords = []
listOfPasswordsDoubled = []
passwordJoined = 0

def countDuplicates(list):
    dictOfPasswords = {}
    for element in list:
        if element in dictOfPasswords:
            dictOfPasswords[element] += 1
        else:
            dictOfPasswords[element] = 1
    dictOfPasswords = {key: value for key, value in dictOfPasswords.items() if value > 1}
    return dictOfPasswords

for first in range(2, 10):
    password[0] = first
    for second in range(2, 10):
        password[1] = second
        if password[1] < password[0]:
            continue
        for third in range(2, 10):
            password[2] = third
            if password[2] < password[1]:
                continue
            for fourth in range(2, 10):
                password[3] = fourth
                if password[3] < password[2]:
                    continue
                for fifth in range(2, 10):
                    password[4] = fifth
                    if password[4] < password[3]:
                        continue
                    for sixth in range(2, 10):
                        password[5] = sixth
                        if password[5] < password[4]:
                            continue
                        passwordJoined = int("".join(map(str, password)))
                        if 278384 <= passwordJoined <= 824795:
                            flag = len(set(password)) == len(password)
                            if not flag:
                                listOfPasswords.append(passwordJoined)
                                dictOfPasswords = countDuplicates(password)
                                check = 0
                                for key, value in dictOfPasswords.items():
                                    if value == 2:
                                        check += 1
                                if check > 0:
                                    listOfPasswordsDoubled.append(passwordJoined)

#pt1
print(len(listOfPasswords))
#pt2
print(len(listOfPasswordsDoubled))
