function whatTime(h, m, p) {
    var beginTime = 0;
    var middleTime = 0;
    var endTime = 0;
    var completeSentence = "";
    if (h == 12 && m == 00 && p == "AM") {
        completeSentence = "It is midnight.";
        return completeSentence;
    } else if (h == 12 && m == 00 & p == "PM") {
        completeSentence = "It is noon.";
        return completeSentence;
    } else if (h == 00) {
        completeSentence = "Function assumes a 12 hour clock format, you have submitted a 24 hour clock format. Please try again.";
        return completeSentence;
    }
    if (h == 12 && m > 30) {
        h = 0;
    }
    if (m < 30 && m != 15 && m != 00 && m != 05) {
        beginTime = "It's just after ";
        middleTime = h;
    } else if (m > 30 && m != 45 && m != 00) {
        beginTime = "It's almost ";
        middleTime = h + 1;
    } else if (m == 30) {
        beginTime = "It's half past "
        middleTime = h;
    } else if (m == 15) {
        beginTime = "It's a quarter past ";
        middleTime = h;
    } else if (m == 45) {
        beginTime = "It's a quarter to ";
        middleTime = h + 1;
    } else if (m == 05) {
        beginTime = "It's five after ";
        middleTime = h;
    } else if (m == 00) {
        beginTime = "It's ";
        middleTime = h;
    }
    if (p == "PM" && h < 6 || p == "PM" && h == 12) {
        endTime = " in the afternoon.";
    } else if (p == "PM" && h >= 6 && h < 9) {
        endTime = " in the evening.";
    } else if (p == "PM" && h >= 9 && h < 12) {
        endTime = " at night.";
    } else if (p == "AM") {
        endTime = " in the morning.";
    } else {
        endTime = ", but I can't tell you if it's morning or evening.";
    }
    completeSentence = beginTime + middleTime + endTime;
    return completeSentence;
}

var hour = 12;
var minute = 25;
var period = "PM";

console.log(whatTime(hour, minute, period));
