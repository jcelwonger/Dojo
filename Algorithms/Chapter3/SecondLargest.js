var arr = [42, 1, 4, Math.PI, 7];
console.log(secondLargest(arr));

function secondLargest(arr) {
    if (arr.length < 1) {
        return null;
    } else {
        var largest = Math.max.apply(null, arr);
        var min = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > min && arr[i] != largest) {
                min = arr[i];
            }
        }
    }
    return min;
}
