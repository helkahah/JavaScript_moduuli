'use strict'
let participants = prompt('how many participants?')
const names = []
/* tehdään array */
for (let i=0; i<participants; i++){
  name = prompt('What is the name of the participant?')
  names.push(name)
}
/* muutetaan listan alkiot tekstiksi */
let text = "<ol>";
names.forEach(list);
text += "</ol>";
/* tulostetaan ne html tiedostoon */
document.getElementById("print").innerHTML = text;
/* tällä funktiolla muutetaan helposti listan alkiot tekstiksi */
function list(value) {
  text += "<li>" + value + "</li>";
}

