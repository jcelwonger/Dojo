function sumToOne(num) {
    var numString = num.toString();
    var loops = numString.length;
    var total = 0;
    while (loops > 0) {
        while (num > 0) {
            total += num % 10;
            num = Math.floor(num / 10);
        }
        loops -= 1;
    }
    return total;
}
console.log(sumToOne(928));
