function changecolor() {
 let r = randomNumber(0,255)
 let g = randomNumber(0,255)
 let b = randomNumber(0,255)

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}


function randomNumber(min,max ) {
    return Math.floor((Math.random() * (max - min)) + min)
}
let count = 0;

function plus() {
  document.getElementById('clicker').innerText = count;
  count++;
}
function minus() {
    document.getElementById('clicker').innerText = count;
    count--;
}