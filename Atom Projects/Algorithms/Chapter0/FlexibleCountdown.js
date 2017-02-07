function countDown(lowNum,highNum,mult) {
  while (highNum > lowNum) {
    console.log(highNum);
    highNum = highNum - mult;
  }
}
countDown(1,16,2);
