//Write your pseduo code first! 
document.querySelector('#conversion').addEventListener('click', cToF)
document.querySelector('#conversionFToC').addEventListener('click', fToC)
document.querySelector('#conversionCToK').addEventListener('click', cToK)

function cToF() 
{
    let Temp = document.querySelector('#temp').value
    Temp = Temp * 9 / 5 + 32;
    document.querySelector('#convertedTemp').innerText = Temp
}

function fToC(){
    let Temp = document.querySelector('#tempF').value
    Temp = (Temp-32)/1.8
    document.querySelector('#convertedC').innerHTML = Temp
}

//convert celsius to Kelvin
//formula is K = C +273.15
//place in html

function cToK(){
    let Temp = document.querySelector('#tempC').value
    Temp = (Number(Temp)+273.15)
    document.querySelector('#convertedK').innerText=Temp
}
//bcs + is for concatenation as well as addition, if a number is not specified or initially manipulated as such it will be treated as a string