# Odd/Even Function
def evenOdd():
    nums = range(1, 2000)
    for i in nums:
        if i % 2 == 1:
            print 'Number is ' + str(i) + '. This is an odd number.'


# Multiply Function
def multiply(list, mult):
    newList = []
    for i in list:
        newList.append(i * mult)
    return newList


oldList = [1, 2, 3, 4, 5]
b = multiply(oldList, 5)


# Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for i in arr:
        subList = []
        for j in range(i):
            subList.append(1)
        new_array.append(subList)
    return new_array


c = layered_multiples(multiply(oldList, 3))
print evenOdd()
print b
print c
