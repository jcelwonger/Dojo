function reset() {
    claireX = 0;
    claireY = 0;
}

function moveBy(x, y) {
    claireX += x;
    claireY += y;
}

function xLocation() {
    var distanceX = claireX
    return distanceX;
}

function yLocation() {
    var distanceY = claireY;
    return distanceY;
}

function distFromHome() {
    var distFromHome = (claireX * claireX) + (claireY * claireY);
    return distFromHome;
}
var claireX = 0;
var claireY = 0;

reset();
moveBy(1, -2);
moveBy(3, 1);
console.log(xLocation() + ' ' + yLocation());
console.log(distFromHome());
