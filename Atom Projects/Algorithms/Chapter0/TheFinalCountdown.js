function finalCountdown (param1,param2,param3,param4) {
  var mult = param1;
  while (param1 < param2 || param1 == param4) {
    param1 += mult;
  }
  while (param1 >= param2 && param1 <= param3) {
    if (param1 == param4) {
      param1 += mult;
    }
    console.log(param1);
    param1 += mult;
  }
}
finalCountdown(2,5,20,12);
