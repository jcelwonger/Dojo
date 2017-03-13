var arr = [3, 4, 4, 5, 1, 0, -2, -4, 3];
console.log(minToFront(arr));

function minToFront(arr) {
    var min = Math.min.apply(null, arr);
    var minIndex = arr.indexOf(min);
    arr.splice(minIndex, 1);
    arr.splice(0, 0, min);
    return arr;
}
