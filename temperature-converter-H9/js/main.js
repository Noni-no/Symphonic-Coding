//Write your pseduo code first! 
//accept temp C
//convert to F
//display F
document.querySelector('#conversion').addEventListener('click', cToF)

function cToF() 
{
    console.log("testing?")
    let Temp = document.querySelector('#temp').value
    Temp = Temp * 9 / 5 + 32;
    document.querySelector('#convertedTemp').innerText = Temp
}