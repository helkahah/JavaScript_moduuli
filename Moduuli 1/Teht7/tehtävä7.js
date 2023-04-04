loops = prompt('Give me a number')
dice = 0
for (let i=0; i<loops; i++){
  die = Math.floor(Math.random()*6)
  dice += die;
}
document.getElementById('print').innerHTML = "The dice were thrown " + loops +
    " time(s) and the sum of the thrown dice is " + dice;