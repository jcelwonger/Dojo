function whatIsTheReward(daysToDouble) {
    var reward = 0.01;
    for (var i = 0; i < daysToDouble; i++) {
        reward = reward * 2;
    }
    console.log("After " + daysToDouble + " days, the reward total will be " + reward + ".");
}

function howManyDays(targetValue) {
    var daysRequired = 0;
    if (targetValue == Infinity) {
        console.log("I'm not counting to Infinity, please choose a real number.");
        break; //If the targetValue is infinity, I would like the loop to break and end...
    }
    for (var reward = 0.01; reward <= targetValue; reward *= 2) {
        daysRequired += 1;
    }
    console.log("It would take " + daysRequired + " days to reach " + targetValue + ".");
}
whatIsTheReward(30);
howManyDays(10000);
howManyDays(1000000000);
//Counting to Infinity is not advised.
howManyDays(Infinity);
