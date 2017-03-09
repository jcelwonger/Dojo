function sigDigit(num) {
    var sigDigit = num.toPrecision(1);
    sigDigit = sigDigit.replace(/\./g, '');
    sigDigit = sigDigit.replace(/\0/g, '');
    if (sigDigit.substring(0, 1) == 0) {
        sigDigit = Number(sigDigit);
    } else {
        sigDigit = sigDigit.substring(0, 1);
    }
    return sigDigit;
}

console.log(sigDigit(0.007203485));
