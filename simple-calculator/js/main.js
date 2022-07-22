let total = 0

document.querySelector('#pumpkin').addEventListener('mouseenter', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#fifth').addEventListener('click', add5)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function add5(){
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

document.querySelector('#add').addEventListener('click', add)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

function add(){
  const first = document.querySelector('#firstNum').value
  const second = document.querySelector('#secondNum').value

  let total = Number(first)+Number(second)
  document.querySelector("#calcResult").innerText = total
}
function subtract(){
  const first = document.querySelector('#firstNum').value
  const second = document.querySelector('#secondNum').value
  
  let total = Number(first) - Number(second)
  document.querySelector('#calcResult').innerText = total
}
function multiply(){
  const first = document.querySelector('#firstNum').value
  const second = document.querySelector('#secondNum').value

  let total = Number(first)*Number(second)
  document.querySelector('#calcResult').innerHTML = total
}
function divide(){
  const first = document.querySelector('#firstNum').value
  const second = document.querySelector('#secondNum').value

  let total = Number(first) / Number(second)
  document.querySelector('#calcResult').innerHTML = total
}