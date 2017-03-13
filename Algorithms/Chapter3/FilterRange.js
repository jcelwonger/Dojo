var arr = [-2, -1, 0, 1, 2, 3, 4, 5];
console.log(filterRange(arr, -1, 4));



function filterRange(arr, minRange, maxRange) {
    console.log(maxRange);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < maxRange && arr[i] > minRange) {
            arr.splice(i, 1);
            i -= 1;
        } else {
            continue;
        }
    }
    return arr;
}
