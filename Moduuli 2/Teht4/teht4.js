'use strict'

const numbers = [];
let loop = true;
while (loop === true){
  let number = prompt('Give me a number');
  numbers.push(number);
  if (number === "0"){
    loop = false
  }
}
numbers.sort(function(a, b){return b - a});
console.log(numbers)