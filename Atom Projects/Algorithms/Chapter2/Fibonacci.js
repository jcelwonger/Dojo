function fibonacci(num) {
    var arr = [0, 1, 1, 2];
    var fib = 0;
    if (num > arr.length - 1) {
        for (var i = arr.length - 1; i <= num; i++) {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }
        fib = arr[num];

    } else {
        fib = arr[num];
    }
    console.log(fib);
}
fibonacci(8);
