function clockHandAngles(seconds) {

}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var d = new Date();
    var x = '';
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x = h + ':' + m + ':' + s;
    return x
}

console.log(myFunction());
