// *Variables*
// Create a variable and console log the value
let x = 42
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y = 54
 alert(y += 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4Nums(num1, num2, num3, num4){
    let difference = num1-num2-num3-num4
    alert(difference)
}
subtract4Nums(78, 4, 56, 9)
// Create a function that divides one number by another and returns the remainder
function findRemainder(num1, num2){
    let rem = num1%num2
    return rem
}
console.log(findRemainder(23,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addAndAlert(num1, num2){
    let sum = num1+num2
    if(sum > 50){
        alert("Jumanji")
    }
}
addAndAlert(26, 90)
addAndAlert(3,5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multAndAlert(n1, n2, n3){
    let prod = n1*n2*n3
    if( prod % 3 === 0 ){
        alert("Zebra")
    }
}

multAndAlert(9, 1, 3)