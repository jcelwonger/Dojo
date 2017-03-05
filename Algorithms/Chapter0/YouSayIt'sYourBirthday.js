function yourBirthday(a,b) {
  if ((a == 9 || a == 27)&&(b == 9 || b == 27)) {
    console.log("How did you know?");
  } else {
    console.log("Just another day....");
  }
}
yourBirthday(9,27);
yourBirthday(27,9);
yourBirthday(7,18);
