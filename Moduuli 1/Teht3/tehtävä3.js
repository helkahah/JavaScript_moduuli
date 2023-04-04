number1 = prompt('Give me a number')
number2 = prompt('Give me a 2nd number')
number3 = prompt('give me a 3rd number')

sum = number1 + number2 + number3
product = number1 * number2 * number3
average = (number1 + number2 + number3) * 2

document.querySelector('#sum').innerHTML = sum
document.querySelector('#product').innerHTML = product
document.querySelector('#average').innerHTML = average