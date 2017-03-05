function goldiLocks(arr) {
  if (arr[0] > arr.length) {
    console.log("Too big!");
  } else if (arr[0] < arr.length) {
    console.log("Too small!");
  } else {
    console.log("Just right!");
  }
}

var arr = [2,1];
goldiLocks(arr);
