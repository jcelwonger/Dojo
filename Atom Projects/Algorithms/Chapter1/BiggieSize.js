function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
}

var arr = [-2, -9, 3, 5, 6, -2];
biggieSize(arr);
