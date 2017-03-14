import re

f = open('pandp.txt', 'r')

strings = re.findall(r'ss', f.read())

print strings
