// *Variables*
// Create a variable and console log the value
let x = 42;
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y = 35;
alert(y+=10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(n1, n2, n3, n4){
    alert(n1-n2-n3-n4)
}
// Create a function that divides one number by another and returns the remainder
function remain(n1,n2){
    return n1%n2
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumangi(n1,n2){
    if(n1+n2 > 50){
        alert("Jumangi")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1,n2,n3){
    if((n1*n2*n3)%3 === 0){
        alert("ZEBRA")
    }
}
subtract(54, 25,2, 5)

console.log(remain(34, 3))

jumangi(35, 3)
jumangi(35, 20)

zebra(3,6,9)
zebra(2,4,8)