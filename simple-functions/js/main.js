document.querySelector('#add').addEventListener('click', add)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)
//create a function that adds two numbers and alerts the sum
function add(){
    const first = document.querySelector('#firstNum').value
    const second = document.querySelector('#secondNum').value
  
    let total = Number(first)+Number(second)
    alert(total)
  }
//create a function that multiplys three numbers and console logs the product
function multiply(){
    const first = document.querySelector('#firstNum').value
    const second = document.querySelector('#secondNum').value
    const third = document.querySelector('#thirdNum').value
  
    let total = Number(first)*Number(second)
    console.log(total)
  }
//create a function that divides two numbers and returns the ???
function divide(){
    const first = document.querySelector('#firstNum').value
    const second = document.querySelector('#secondNum').value
  
    let total = Number(first) / Number(second)
    let remainder = Number(first)%Number(second)
    console.log(remainder)
    return total
 }

  function subtract(){
    const first = document.querySelector('#firstNum').value
    const second = document.querySelector('#secondNum').value
    
    let total = Number(first) - Number(second)
    document.querySelector('#calcResult').innerHTML = total
  }
  
 