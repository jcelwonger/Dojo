function whatReallyHappensToday() {
    var volcano = Math.random();
    var tsunami = Math.random();
    var earthquake = Math.random();
    var blizzard = Math.random();
    var meteorStrike = Math.random();
    if (volcano == .1) {
        console.log("There is a 10% chance of Volcano today.");
    } else if (tsunami == .15) {
        console.log("There is a 15% chance of Tsunami today.");
    } else if (earthquake == .2) {
        console.log("There is a 20% chance of Earthquake today.")
    } else if (blizzard == .25) {
        console.log("There is a 25% chance of Blizzard today.")
    } else if (meteorStrike == .3) {
        console.log("There is a 30% chance of Meteor Strike today.")
    } else if (volcano == .1 && tsunami == .15 && earthquake == .20 && blizzard == .25 && meteorStrike == .30) {
        console.log("It's a perfect storm, every natural disaster is likely to strike today.")
    } else {
        console.log("No conditions were met.");
    }
}
whatReallyHappensToday();
