var arr = [2, 3, 54, 6, 2, 6, -2];

function shiftArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    arr.push(0);
    console.log(arr);
}

shiftArray(arr);
