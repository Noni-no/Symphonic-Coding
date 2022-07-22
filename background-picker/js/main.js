document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('gold').onclick = partyGold
document.getElementById('reset').onclick = partyWhite

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}
function partyGold(){
  document.querySelector('body').style.backgroundColor = 'gold'
  document.querySelector('body').style.color = 'white'
}
function partyWhite(){
  document.querySelector('body').style.backgroundColor = 'white'
  document.querySelector('body').style.color = 'black'
}