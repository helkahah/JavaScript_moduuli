confirmation = confirm('Should I calculate the square root?')
if (confirmation === true){
  calculation = prompt('Give a number')
  if (calculation>0){
    square = Math.sqrt(calculation)
    document.getElementById('print').innerHTML = "The square root of " + calculation + " is " + square;
  }
  else{
    document.getElementById('print').innerHTML ="The square root of a negative number is not defined";
  }
}
else {
  document.getElementById('print').innerHTML = "The square root is not calculated.";
}
