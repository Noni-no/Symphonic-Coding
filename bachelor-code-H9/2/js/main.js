// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	sharleen.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	andi.classList.add('hidden')
// 	claire.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }


const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')
const andi = document.querySelector('#andi')

document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)
document.querySelector('#andiNext').addEventListener('click', andiNext)

function claireNext(){
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}