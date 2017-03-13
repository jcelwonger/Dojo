var arr = [1, 2, 3, 4, 5];
reverseArray(arr);

function reverseArray(arr) {
    var swap = 0;
    var lastIndex = arr.length - 1;
    for (var i = 0; i < arr.length - 2; i++) {
        swap = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = swap;
    }
    console.log(arr);
}
