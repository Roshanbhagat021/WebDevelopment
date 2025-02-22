const formElement = document.querySelector("form")
const passcodeContainer = document.querySelector(".passcode-container")
const hiddenContainer = document.querySelector(".hidden-picture")
const passKeyInput = document.querySelector("form input")
const submitBtn = document.querySelector("form button")
const resultElement = document.querySelector(".result")
const guessesElement = document.querySelector(".guesses")
const tryContainer = document.querySelector(".try-container")
const tryContainerChilds = [...document.querySelector(".try-container").children]
const tryLeft = document.querySelector(".tries-left")
const hintsContainer = document.querySelector(".hints")
const waitingTimeElement = document.querySelector(".waiting-time")

let randomNumber = Math.floor(Math.random()*100)+1
let guessedArray = []
let lifes = 7

passKeyInput.addEventListener("input",()=>{
    submitBtn.disabled = passKeyInput.value.trim() === ""
})

formElement.addEventListener("submit",(e)=>{

    e.preventDefault()
    if(lifes==0){
        hintsContainer.style.display = "none"
        submitBtn.disabled = true
        passKeyInput.value = ""
        passKeyInput.disabled = true
        let waitingSeconds = 30
        const intervalId = setInterval(()=>{
            waitingTimeElement.innerText = `Please try later in ${waitingSeconds} sec`
            if(waitingSeconds == 0){
                clearInterval(intervalId)
                lifes = 7
                tryLeft.innerText = lifes
                resultElement.innerText = ""
                guessesElement.innerText = ""
                hintsContainer.style.display = "block"
                passKeyInput.disabled = false
                guessedArray = []
                 tryContainerChilds.forEach((child)=>{
                    child.classList.add("live")
                 })
                randomNumber = Math.floor(Math.random()*100)+1
                waitingTimeElement.innerText = ""
                console.log("Hello000");
            }
            waitingSeconds--
        },1000)
        return
    }
    guessedArray.push(passKeyInput.value)
    
    console.log(randomNumber);
    if(passKeyInput.value == randomNumber){
        passcodeContainer.style.display = "none"
        hiddenContainer.style.display = "block"
        passKeyInput.value = ""
    }else if(passKeyInput.value > randomNumber) {
        passKeyInput.value = ""
        resultElement.innerHTML = "<span style='color:blue;'>Incorrect Passkey!!! <span/><span style='color:red;'>  Hint:Too High! <span/>"
        tryContainerChilds[lifes-1].classList.remove("live")
        guessesElement.innerText  = `Your guesses: ${guessedArray}`
        lifes--
        tryLeft.innerText = lifes
        submitBtn.disabled = true
    }else{
        passKeyInput.value = ""
        resultElement.innerHTML = "<span style='color:blue;'>Incorrect Passkey!!! <span/><span style='color:red;'>  Hint:Too Low! <span/>"
        tryContainerChilds[lifes-1].classList.remove("live")
        guessesElement.innerText  = `Your guesses: ${guessedArray}`
        lifes--
        tryLeft.innerText = lifes
        submitBtn.disabled = true
    }

})