function printMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
var arr = [-2, -4, 5, 1, 14, -3, 2];
printMax(arr);
