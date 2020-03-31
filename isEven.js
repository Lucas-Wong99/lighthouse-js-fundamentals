const isEven = function (num){
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(45));


//same function using a conditional within the function
// const isEven = function (num) {
//   if (num % 2 === 0){
//     return 'true'
//   } else {
//     return 'false'
//   }
// }

// const even = isEven(17);
// console.log(even)