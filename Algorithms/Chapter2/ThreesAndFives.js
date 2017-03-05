function threesFives() {
    var start = 100;
    var end = 4000000;
    var sum = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        }
        if (i % 3 === 0) {
            sum += i;
        }
        if (i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
threesFives();

function betterThreesFives(start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            continue;
        }
        if (i % 3 === 0) {
            sum += i;
        }
        if (i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
betterThreesFives(1, 50);
