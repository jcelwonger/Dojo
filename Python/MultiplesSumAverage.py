# Multiples Part 1
nums = range(0, 1000)
for i in nums:
    if i % 2 == 1:
        print i

# Multiples Part 2
print range(5, 1000, 5)  # It was One Million but I reduced it or testing

# Sum List
a = [1, 2, 5, 10, 255, 3]
lastArray = len(a)
sums = 0
i = 0
while i < lastArray:
    sums += a[i]
    i += 1
print sums

# Average List - The process remains same as above since the last was the same
avg = sums / lastArray
print avg
