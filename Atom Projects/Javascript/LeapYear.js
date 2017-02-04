function isLeapYear(year) {
  if (year % 400 === 0) {
    console.log("Leap Year");
  } else if (year % 4 === 0 && year % 100 != 0 ) {
    console.log("Leap Year");
  } else if (year % 100 === 0) {
    console.log("Not a Leap Year")
  }
}
isLeapYear(1000); //Not a Leap Year
isLeapYear(4000); //true
