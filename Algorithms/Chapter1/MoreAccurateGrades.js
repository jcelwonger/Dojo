function giveLetterGrade(numScore) {
    var letterGrade = "Score: " + numScore + " - Grade : ";
    if (numScore >= 90) {
        if (numScore < 93) {
            letterGrade += "A-";
        } else {
            letterGrade += "A";
        }
    } else if (numScore >= 80 && numScore < 90) {
        if (numScore < 83) {
            letterGrade += "B-";
        } else if (numScore > 87) {
            letterGrade += "B+";
        } else {
            letterGrade += "B";
        }
    } else if (numScore >= 70 && numScore < 80) {
        if (numScore < 73) {
            letterGrade += "C-";
        } else if (numScore > 77) {
            letterGrade += "C+";
        } else {
            letterGrade += "C";
        }
    } else if (numScore >= 60 && numScore < 70) {
        if (numScore < 63) {
            letterGrade += "D-";
        } else if (numScore > 67) {
            letterGrade += "D+";
        } else {
            letterGrade += "D";
        }
    } else if (numScore < 60) {
        letterGrade += "F";
    }
    console.log(letterGrade);
}
giveLetterGrade(92);
