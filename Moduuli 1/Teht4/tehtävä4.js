name = prompt('What is your name?')

rand = Math.floor(Math.random() * 4)
if (rand===1){
  house = "Gryffindor"
}
else if (rand===2){
  house = "Hufflepuff"
}
else if (rand===3){
  house = "Ravenclaw"
}
else if (rand===4){
  house = "Slytherin"
}
else {
  house = "error 404"
}

document.getElementById('hogwarts').innerHTML = name + " you are " + house;