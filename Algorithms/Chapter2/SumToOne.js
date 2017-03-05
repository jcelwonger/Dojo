function sumToOne(num) {
    return (num % 10 +
        Math.floor(num / 10) % 10 +
        Math.floor(num / 100) % 10);
}
console.log(sumToOne(928));
