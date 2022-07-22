document.querySelector('#yell').addEventListener('click', run)
document.querySelector('#yell').addEventListener('click', chores)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  return(fName, fMidName, lMidName, lName)
  //Add what you should be doing - conditionals go here

  // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

function chores(){
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value
 
  if(fName === '' && fMidName === '' && lMidName === '' && lName === ''){
  document.querySelector("#doThis").innerText = "DON'T YOU IGNORE ME!"
  }
  else if(fMidName === '' && lMidName === '' && lName === ''){
    document.querySelector("#doThis").innerText = "MOW THE LAWN!"
    return;
  }else if(lMidName === '' && lName === ''){
    document.querySelector("#doThis").innerText = "WASH THE DISHES!"
    return;
  }else if(lName === ''){
    document.querySelector("#doThis").innerText = "DO THE LAUNDRY!"
    return;
  }else{
    document.querySelector("#doThis").innerText = "CLEAN YOUR ROOM THIS INSTANT!"
    return;
  }
}
// let ch = run()
// chores(ch)
// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
