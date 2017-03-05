var arr = [1, 5, 3, 6, 2, -2];

function printAvg(arr) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);
}
printAvg(arr);
