function sumToOne(num) {
    var total3 = 0;
    var total2 = 0;
    var total1 = 0;
    while (num > 0) {
        total3 += num % 10;
        num = Math.floor(num / 10);
    }
    while (total3 > 0) {
        total2 += total3 % 10;
        total3 = Math.floor(total3 / 10);
    }
    while (total2 > 0) {
        total1 += total2 % 10;
        total2 = Math.floor(total2 / 10);
    }
    return total1;
}
console.log(sumToOne(928));
