# Find and Replace
str = "If monkeys like bananas, then I must be a monkey!"
print str.count('monkey')
print str.replace('monkey', 'alligator')

# Min and Max
x = [2, 54, -2, 7, 12, 98]
print max(x)
print min(x)

# First and Last
y = ["hello", 2, 54, 02, 7, 12, 98, "world"]
print y[:1] + y[len(y) - 1:]

# New List
z = [19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]
z.sort()
print z

zFirstHalf = z[:(len(y) / 2) + 1]
zLastHalf = z[(len(y) / 2) + 1:]
zLastHalf.insert(0, zFirstHalf)
print zLastHalf
