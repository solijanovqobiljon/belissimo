let uz = document.querySelector('.uz')

uz.addEventListener('click' , () => {
    let ru = document.querySelector('.ru').classList.toggle('RU2')

})


let fButton = document.querySelector('.firstB')

fButton.addEventListener('click' , () =>{
let fButton = document.querySelector('.secondB').style.background = "none"

    let SButton = document.querySelector('.firstB').style.background = "white"
    let inp = document.querySelector('.input_part')

    inp.innerHTML = 'yetkazib berish manzilini tanlang'
} )




let SButton = document.querySelector('.secondB')

SButton.addEventListener('click' , () =>{
let fButton = document.querySelector('.firstB').style.background = "none"

    let SButton = document.querySelector('.secondB').style.background = "white"


    let inp = document.querySelector('.input_part')

    inp.innerHTML = 'Fillialni tanlang'
} )