//A function that determines if a number is odd by taking an argument(num) and saying that if the number
// divided by two does NOT equal 0 then it is true.

const isOdd = function(num) {
  return num % 2 != 0
}

console.log("37 is odd: " + isOdd(37));
console.log("88 is odd: " + isOdd(88));