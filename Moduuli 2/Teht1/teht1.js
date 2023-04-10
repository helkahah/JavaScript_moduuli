const numbers = []
for (let i=0; i<5; i++){
  let number = prompt('give me a number')
  numbers.push(number)
}

for (let i=numbers.length; i>0; i--){
  console.log(i)
}
