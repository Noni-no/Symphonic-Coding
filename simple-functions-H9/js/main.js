document.querySelector('#addition').addEventListener('click', sum)
document.querySelector('#multiplication').addEventListener('click', mult)
document.querySelector('#division').addEventListener('click', div)
//create a function that adds two numbers and alerts the sum
function sum(){
    const num1 = document.querySelector('#calculation').value 
    const num2 = document.querySelector('#calculation2').value
    alert(Number(num1)+Number(num2))
}
//create a function that multiplys three numbers and console logs the product
function mult(){
    const n1 = document.querySelector('#calculation').value
    const n2 = document.querySelector('#calculation2').value
    const n3 = document.querySelector('#calculation3').value
    console.log(n1*n2*n3)
}
//create a function that divides two numbers and returns the ???
function div(){
    const n1= document.querySelector('#calculation').value
    const n2 = document.querySelector('#calculation2').value
    console.log(n1/n2)
    return n1/n2 //return does not report or save variable
    //document.querySelector('#convertedTemp').innerText = total
}
