import re

f = open('python\\regex\pandp.txt', 'r')

strings = re.findall(r'wife', f.read())
total = 0
for string in strings:
    total += 1
print 'The total number of times wife is written is', total, 'which is nice.'
print strings
