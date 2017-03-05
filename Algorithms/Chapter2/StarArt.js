function drawLeftStars(num) {
    var arr = [];
    var printOut = "";
    for (var i = 0; i < num; i++) {
        arr.push("*");
        printOut += arr[i];
    }
    console.log(printOut);
}

function drawRightStars(num) {
    var arr = [];
    var starsToPrint = 75 - 20;
    var printOut = "";
    for (var i = 0; i < 75; i++) {
        if (starsToPrint > i) {
            arr[i] = " ";
        } else {
            arr[i] = "*";
        }
        printOut += arr[i];
    }
    console.log(printOut);
}

function drawCenterStars(num) {
    var arr = [];
    var bottomRange = (75 - num) / 2;
    var upperRange = (bottomRange + num);
    var printOut = "";
    var i = 0;
    while (i <= bottomRange) {
        arr[i] = " ";
        printOut += arr[i];
        i++;
    }
    while (i > bottomRange && i < upperRange) {
        arr[i] = "*";
        printOut += arr[i];
        i++;
    }
    while (i > upperRange && i < 75) {
        arr[i] = " ";
        printOut += arr[i];
        i++;
    }
    console.log(printOut);
}

drawLeftStars(75);
drawRightStars(20);
drawCenterStars(25);
