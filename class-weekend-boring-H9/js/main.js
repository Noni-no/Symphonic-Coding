//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//     document.querySelector("#placeToSee").innerHTML = "YOU HAVE CLASS"
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("It's The Weekend!")
//     document.querySelector("#placeToSee").innerText = "It's the Weekend!"
//   }else if(day === "wednesday"){
//     console.log("It's humpday...")
//     document.querySelector("#placeToSee").innerHTML = "It's humpday..."
//   }else{
//     console.log("BORING")
//     document.querySelector('#placeToSee').innerText = "BORING"
//   }
// }


document.querySelector('#check').addEventListener("click", check)

function check(){
  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerHTML = "GO TO CLASS!"
  }else if(day === "wednesday"){
    document.querySelector('#placeToSee').innerText = "Sigh, humpday..."
  }else if(day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerHTML = "It's the Weekend!"
  }else{
    document.querySelector('#placeToSee').innerText = "Boring"
  }
}
