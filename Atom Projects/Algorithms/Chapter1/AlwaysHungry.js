function hungry(arr) {
  var foodTotal = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      foodTotal += 1;
    }
  }
  if (foodTotal == 0) {
    console.log("I'm hungry!");
  } else if (foodTotal > 0) {
    while (foodTotal > 0) {
      console.log("yummy");
      foodTotal -= 1;
    }
  }
}
var arr = ["food","food","garbage","food"];
var arr2 = ["garbage","refuse","bees"];
hungry(arr);
