var arr = [2, 4, 6, 7, 9];

function squareValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}
squareValues(arr);
