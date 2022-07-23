// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// document.querySelector('#yell').addEventListener('click', run)
// document.querySelector('#yell').addEventListener('click', chores)
document.querySelector('#yell').addEventListener('click', yellAboutChores)

// function run(){
//   const fName = document.querySelector('#firstName').value 
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerHTML = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// function chores(){
//   if(document.querySelector('#firstName').value === '' && document.querySelector('#firstMiddle').value === '' && document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
//     document.querySelector('#whatChore').innerHTML = `DON'T YOU IGNORE ME!`
//   }
//   else if(document.querySelector('#firstMiddle').value === '' && document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
//     document.querySelector('#whatChore').innerHTML = "DO THE LAUNDRY!"
//   }
//   else if(document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
//     document.querySelector('#whatChore').innerText = "MOW THE LAWN!"
//   }
//   else if(document.querySelector('#lastName').value === ''){
//     document.querySelector('#whatChore').innerText = "WASH THE DISHES!"
//   }
//   else{
//     document.querySelector('#whatChore').innerHTML = "CLEAN YOUR ROOM THIS INSTANT!"
//   }
// }

function yellAboutChores(){
  const fName = document.querySelector('#firstName').value 
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerHTML = `${fName} ${fMidName} ${lMidName} ${lName}`

  if(document.querySelector('#firstName').value === '' && document.querySelector('#firstMiddle').value === '' && document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
    document.querySelector('#whatChore').innerHTML = `DON'T YOU IGNORE ME!`
  }
  else if(document.querySelector('#firstMiddle').value === '' && document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
    document.querySelector('#whatChore').innerHTML = "DO THE LAUNDRY!"
  }
  else if(document.querySelector('#lastMiddle').value === '' && document.querySelector('#lastName').value === ''){
    document.querySelector('#whatChore').innerText = "MOW THE LAWN!"
  }
  else if(document.querySelector('#lastName').value === ''){
    document.querySelector('#whatChore').innerText = "WASH THE DISHES!"
  }
  else{
    document.querySelector('#whatChore').innerHTML = "CLEAN YOUR ROOM THIS INSTANT!"
  }
}




function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

ask("Do you agree?", showCancel);

ask("Do you agree?", showOk);



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
