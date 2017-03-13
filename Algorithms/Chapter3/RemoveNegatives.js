var arr = [-3, -2, -1, 0, 1, 2, 3];
console.log(removeNegs(arr));

function removeNegs(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            continue;
        } else {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    return arr;
}
