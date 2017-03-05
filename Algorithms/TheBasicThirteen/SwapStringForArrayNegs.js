var arr = [-2, -4, 5, 3, 6, 7, -4];

function swapString(arr) {
    var swap = 'Dojo';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = swap;
        }
    }
    console.log(arr);
}
swapString(arr);
