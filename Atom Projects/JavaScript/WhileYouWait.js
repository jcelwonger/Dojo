function birthdayCountdown(days) {
    for (var i = days; i >= 0; i--) {
        if (i >= 30) {
            console.log(i + " days until my birthday. Why is it so far away? :-(");
        } else if (i < 30 && i > 5) {
            console.log(i + " days until my birthday. I'm getting hungry for cake!");
        } else if (i <= 5 && i > 1) {
            console.log(i + " DAYS UNTIL MY BIRTHDAY!!!");
        } else if (i == 1) {
            console.log("ONLY " + i + " MORE DAY UNTIL MY BIRTHDAY!!! I'M SO EXCITED!");
        } else if (i == 0) {
            console.log("Oh, it's my birthday already? I guess I was more excited about the wait than my actual birthday. Happy Birthday to me.")
        }
    }
}

var daysUntilBirthday = 360;
birthdayCountdown(daysUntilBirthday);
