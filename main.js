//Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10 )
let xAttempts = 1

//events 

btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleReset)

//function
function handleClick(event){
    //Callback
    
    event.preventDefault() //dont do the standard  

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        
        toggleScreen()

        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function handleReset(){
    toggleScreen()
    xAttempts = 1
}
