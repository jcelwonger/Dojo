var arr = [1, 2, 'Jason', 3, 4, 5, 6, 7];
swapPairs(arr);

function swapPairs(arr) {
    var arrLength = arr.length;
    var swap = 0;
    console.log(arrLength);
    if (arrLength % 2 === 0) { // It is even
        console.log('The array has an even number of values.');
        console.log('Original Array:');
        console.log(arr);
        for (var i = 0; i < arr.length; i += 2) {
            swap = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = swap;
        }
        console.log('Swapped Array:');
        console.log(arr);
    } else {
        console.log('The array has an odd number of values');
        console.log('Original Array:');
        console.log(arr);
        for (var i = 0; i < arr.length - 1; i += 2) {
            swap = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = swap;
        }
        console.log('Swapped Array:');
        console.log(arr);
    }
}
