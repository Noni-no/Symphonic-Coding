document.querySelector('#check').addEventListener('click', check)
document.querySelector('#checkHour').addEventListener('click', checkTime)

let todayIsClass = false
function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "Class!"
    // alert("Class!")
    todayIsClass = true
  }
  else if(day === "wednesday"){
    document.querySelector('#placeToSee').innerText = "sigh humpday"
  }
  else if(day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = "Weekend!"
    todayIsClass = false
  }
  else{
    document.querySelector('#placeToSee').innerText = "Boring"
    todayIsClass = false
  }

}

function checkTime(){
  const hour = document.querySelector('#hour').value
  alert(hour)
  if(todayIsClass === true && hour>=4 && hour<=8){
      document.querySelector('#placeForTime').innerText = "GO TO CLASS!"
     }
    else if(todayIsClass === true && hour<4){
      document.querySelector('#placeForTime').innerText = "Get ready for class!"
    }
    else{
      document.querySelector('#placeForTime').innerText="Good work."
    }
  }

//youtube picker add another color, calc add +5, class make not-case sensitive