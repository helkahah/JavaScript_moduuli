vuosi = prompt('What year?')
if (vuosi % 4 === 0 && (vuosi % 100 !== 0 || vuosi % 400 === 0)){
  document.getElementById('print').innerHTML = vuosi + " Is a leap year"
}
else{
  document.getElementById('print').innerHTML = vuosi + " is not a leap year"
}
