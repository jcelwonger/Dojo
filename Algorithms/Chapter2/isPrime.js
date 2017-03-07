function isPrime(num) {
    if (num === 1) {
        return 'Not Prime - 1';
    } else if (num === 2) {
        return 'Prime - 2';
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Not Prime - ' + num;
            }
        }
        return 'Prime - ' + num;
    }
}

console.log(isPrime(49));
