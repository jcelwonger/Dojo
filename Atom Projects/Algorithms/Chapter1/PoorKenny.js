function whatHappensToday() {
    var volcano = Math.random();
    var tsunami = Math.random();
    var earthquake = Math.random();
    var blizzard = Math.random();
    var meteorStrike = Math.random();
    if (volcano == .1 && tsunami == .15 && earthquake == .2 && blizzard == .25 && meteorStrike == .3) {
        console.log("Poor Kenny, it's not a very good day.");
    } else {
        console.log("Looks like it's safe-ish outside today.");
    }
}

whatHappensToday();
