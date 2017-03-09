function rollD20() {
    var die = Math.ceil(Math.random() * (20));
    return die;
}

function findDubs() {
    var rollResults = [];
    rollResults.push(rollD20());
    var min = rollResults[0];
    var max = rollResults[0];
    var sum = rollResults[0];
    var avg = sum / rollResults.length;
    var rolls = 1;
    for (var i = 0; i < rollResults.length; i++) {
        rollResults.push(rollD20());
        rolls += 1;
        if (rollResults[i + 1] < min) {
            min = rollResults[i + 1];
        }
        if (rollResults[i + 1] > max) {
            max = rollResults[i + 1];
        }
        sum += rollResults[i + 1];
        avg = sum / rollResults.length;
        if (rollResults[i + 1] == rollResults[i]) {
            console.log('It took ' + rolls + ' rolls to get back-to-back ' + rollResults[i + 1] + "'s.");
            console.log('The lowest roll was ' + min);
            console.log('The highest roll was ' + max);
            console.log('The average roll was ' + avg);
            break;
        }
    }
}
findDubs();
