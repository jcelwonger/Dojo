function weekdayName2(dayNum) {
    var days = buildCalendar();
    var keys = Object.keys(days);
    for (var i = 0; i < keys.length; i++) {
        var day = days[keys[i]];
        for (var x = 0; x < day.length; x++) {
            var dayName = day[x].day;
            var dayNumber = day[x].dayNum;
            if (dayNumber == dayNum) {
                return dayName;
            }
        }
    }

}
//console.log(weekdayName2(1));

function buildCalendar() {
    var days = {
        'Sunday': [{}],
        'Monday': [{}],
        'Tuesday': [{}],
        'Wednesday': [{}],
        'Thursday': [{}],
        'Friday': [{}],
        'Saturday': [{}]
    };
    var keys = Object.keys(days);
    // Add in Sunday Values
    for (var i = 0; i < keys.length; i++) {
        var day = days[keys[i]];
        for (var x = 1; x < day.length; x += 7) {
            day[x].push('dayName: Sunday, dayNum: ' + x);
        }
    }
    console.log(days);
}
buildCalendar();
