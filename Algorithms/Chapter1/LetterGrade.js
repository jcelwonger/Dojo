function giveLetterGrade(numScore) {
    var letterGrade = "Score: " + numScore + " - Grade : ";
    if (numScore >= 90) {
        letterGrade += "A";
    } else if (numScore >= 80 && numScore < 90) {
        letterGrade += "B";
    } else if (numScore >= 70 && numScore < 80) {
        letterGrade += "C";
    } else if (numScore >= 60 && numScore < 70) {
        letterGrade += "D";
    } else if (numScore < 60) {
        letterGrade += "F";
    }
    console.log(letterGrade);
}
giveLetterGrade(87);
