function printRange(start, end, increment) {
    var currentValue = start;
    if (increment == null) {
        increment = 1;
    }
    if (end == null) {
        end = start;
        currentValue = 0;
    }
    if (start > end) {
        console.log("Starting value is greater than ending value");
        return;
    }
    while (currentValue < end) {
        console.log(currentValue);
        currentValue += increment;
    }
}

printRange(11, 40, 5);
