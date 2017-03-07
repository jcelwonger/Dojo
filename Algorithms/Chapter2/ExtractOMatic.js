function extractDigit(num, digitNum) {
    var modulator = 0;
    if (digitNum < 0) {
        modulator = Math.pow(10, digitNum)
    } else if (digitNum > 0) {
        modulator = Math.pow(10, digitNum)
    } else {
        modulator = 1;
    }
    console.log(Math.floor(num / modulator) % 10);
}

console.log(extractDigit(1824.28947, 3));
