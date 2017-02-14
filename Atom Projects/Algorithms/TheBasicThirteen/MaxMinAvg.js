var arr = [1, 3, 6, 2, -3, -67, 0];

function maxMinAvg(arr) {
    var sum = 0;
    var avg = 0;
    var max = 0;
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}
maxMinAvg(arr);
