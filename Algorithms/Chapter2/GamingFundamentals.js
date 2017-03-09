function rollOne() {
    var roll = Math.ceil(Math.random() * (6));
    return roll;
}

function playFives(num) {
    var rollResults = [];
    for (var i = 0; i < num; i++) {
        rollResults.push(rollOne());
    }
    for (var i = 0; i < rollResults.length; i++) {
        if (rollResults[i] === 5) {
            console.log(rollResults[i] + ' That is good luck!');
        } else {
            console.log(rollResults[i]);
        }
    }
}

function playStatistics() {
    var rollResults = [];
    var min = 6;
    var max = 0;
    for (var i = 0; i < 8; i++) {
        rollResults.push(rollOne());
    }
    for (var i = 0; i < rollResults.length; i++) {
        if (rollResults[i] < min) {
            min = rollResults[i];
        }
        if (rollResults[i] > max) {
            max = rollResults[i];
        }
    }
    console.log('The lowest value rolled was ' + min);
    console.log('The highest value rolled was ' + max);
}

function playStatistics2() {
    var rollResults = [];
    var min = 6;
    var max = 0;
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        rollResults.push(rollOne());
    }
    for (var i = 0; i < rollResults.length; i++) {
        if (rollResults[i] < min) {
            min = rollResults[i];
        }
        if (rollResults[i] > max) {
            max = rollResults[i];
        }
        sum += rollResults[i];
    }
    console.log('The lowest value rolled was ' + min);
    console.log('The highest value rolled was ' + max);
    console.log('Combined, all rolls totaled to ' + sum);
}

function playStatistics3(num) {
    var rollResults = [];
    var min = 6;
    var max = 0;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        rollResults.push(rollOne());
    }
    for (var i = 0; i < rollResults.length; i++) {
        if (rollResults[i] < min) {
            min = rollResults[i];
        }
        if (rollResults[i] > max) {
            max = rollResults[i];
        }
        sum += rollResults[i];
    }
    console.log('The lowest value rolled was ' + min);
    console.log('The highest value rolled was ' + max);
    console.log('Combined, all rolls totaled to ' + sum);
}

function playStatistics4(num) {
    var rollResults = [];
    var min = 6;
    var max = 0;
    var sum = 0;
    for (var i = 0; i < num; i++) {
        rollResults.push(rollOne());
    }
    for (var i = 0; i < rollResults.length; i++) {
        if (rollResults[i] < min) {
            min = rollResults[i];
        }
        if (rollResults[i] > max) {
            max = rollResults[i];
        }
        sum += rollResults[i];
    }
    var avg = sum / rollResults.length;
    console.log('The lowest value rolled was ' + min);
    console.log('The highest value rolled was ' + max);
    console.log('The average value of all rolls was ' + avg);
}
playStatistics4(14);
