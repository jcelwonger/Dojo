import random


def coinToss(tosses):
    print 'Starting the program...'
    countTotal = 0
    countHeads = 0
    countTails = 0
    for i in range(0, tosses):
        toss = random.random()
        if toss < 0.5:
            tossResult = 'head'
            countHeads += 1
        elif toss > 0.5:
            tossResult = 'tail'
            countTails += 1
        countTotal += 1
        print "Attempt #{}: Throwing a coin... It's a {}! Got {} head(s) so far and {} tail(s) so far.".format(countTotal, tossResult, countHeads, countTails)
    print 'Ending the program, thank you!'


print coinToss(5000)
