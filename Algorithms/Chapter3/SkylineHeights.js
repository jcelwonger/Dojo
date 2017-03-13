var arr = [-1, 1, 1, 7, 3];
console.log(myView(arr));

function myView(arr) {
    var streetLevel = 0;
    // Get the value of the highest building
    var highestBuilding = Math.max.apply(null, arr);
    var hbIndex = arr.indexOf(highestBuilding);
    // Remove everything that comes after the Highest building
    for (var i = hbIndex + 1; i < arr.length; i += 0) {
        arr.pop();
    }
    // Remove everything below Street Level
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= streetLevel) {
            arr.splice(i, 1);
            i -= 1;
            console.log(arr);
        }
    }
    // Finally, remove anything between the first building we can see, and the highest building
    var firstBuilding = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= firstBuilding) {
            arr.splice(i, 1);
            i -= 1;
        } else {
            continue;
        }
    }
    return arr;
}
