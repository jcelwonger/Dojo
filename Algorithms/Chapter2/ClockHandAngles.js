function clockHandAngles(seconds) {
    var time = seconds;
    var hours = Math.floor(time / 3600);
    if (hours > 24) {
        time -= 86400;
        hours = Math.floor(time / 3600);
    }
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = Math.floor(time % 60);
    var secondDegree = seconds * 6;
    var minuteDegree = Math.floor((minutes * 6) + (secondDegree * 0.017));
    var hourDegree = Math.floor((hours * 30) + (minuteDegree * 0.0832795));
    console.log('Hour Hand: ' + hourDegree + ' degs.');
    console.log('Minute Hand: ' + minuteDegree + ' degs.');
    console.log('Second Hand: ' + secondDegree + ' degs.');

}

console.log(clockHandAngles(3600));
console.log(clockHandAngles(119730));
