var arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));

function shuffle(arr) {
    arr.sort(function(a, b) {
        return 0.5 - Math.random()
    });
    return arr;
}
