var arr = [-2, -4, 4, 1, 5, 0, -3];

function zeroNegs(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

zeroNegs(arr);
