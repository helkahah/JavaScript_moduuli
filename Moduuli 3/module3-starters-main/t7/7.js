const hover = document.getElementById('trigger');
const hover2 = document.getElementById('trigger');
function mOver() {
  const img = document.getElementById('target');
  img.setAttribute('src', 'img/picB.jpg');
}
function mOut(){
  const img =document.getElementById('target');
  img.setAttribute('src','img/picA.jpg');
}

hover.addEventListener('mouseover', mOver);
hover2.addEventListener('mouseout', mOut);