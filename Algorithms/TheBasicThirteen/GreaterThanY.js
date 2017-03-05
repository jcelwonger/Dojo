var y = 2;
var arr = [1, -2, -4, 5, 2, 5, 7, 5, 8];
var totalValues = 0;

function greaterThanY(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        if (y < arr[i]) {
            totalValues += 1;
        }
    }
    console.log(totalValues);
}
greaterThanY(arr, y);
