# Import Needed Modules
import random


# Create Function
def createAndGrade():
    print 'Scores and Grades:'
    # Run through number of students
    for i in range(0, 10):
        # Create Random Integer between 60 and 100
        numGrade = random.randint(60, 100)
        if numGrade >= 90:
            letterGrade = 'A'
        elif numGrade >= 80 and numGrade <= 89:
            letterGrade = 'B'
        elif numGrade >= 70 and numGrade <= 79:
            letterGrade = 'C'
        else:
            letterGrade = 'D'
        gradeSummary = 'Your score is ' + \
            str(numGrade) + ': Your grade is ' + letterGrade
        print gradeSummary
    print 'End of the program. Bye!'


a = createAndGrade()
