const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")
const circle = document.querySelector(".circle")
const pauseResetBtnContainer = document.querySelector(".pause-reset")
const hour = document.querySelector(".timing .hour")
const min = document.querySelector(".timing .min")
const sec = document.querySelector(".timing .sec")
let totalSeconds = 0
let intervalId = "";


function updateTimer(){
    if(totalSeconds > 3600){
        hour.innerText = `${(parseInt(totalSeconds/3600)).toString().padStart(2,"0")}:`
        min.innerText = (parseInt(totalSeconds%3600/60)).toString().padStart(2,"0")
        sec.innerText = (parseInt(totalSeconds%60)).toString().padStart(2,"0")

    }else{
        min.innerText = (parseInt(totalSeconds/60)).toString().padStart(2,"0")
        sec.innerText = (parseInt(totalSeconds%60)).toString().padStart(2,"0")
    }
    totalSeconds ++
}


startBtn.addEventListener("click",()=>{
    startBtn.style.display = "none"
    pauseResetBtnContainer.style.display = "flex"
    totalSeconds = 1
    circle.classList.toggle("playing")
    let playing = document.querySelector(".playing")
    playing.style.animationPlayState ="running"
    updateTimer()
    intervalId = setInterval(updateTimer,1000)
})


pauseBtn.addEventListener("click",()=>{
    let playing = document.querySelector(".playing")
    
    if(intervalId){
        clearInterval(intervalId)
        intervalId = ""
        playing.style.animationPlayState ="paused"
    }else{
        intervalId = setInterval(updateTimer,1000)
        playing.style.animationPlayState ="running"
    }
})

resetBtn.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId = ""
    totalSeconds = 0
    updateTimer()
    startBtn.style.display = "block"
    circle.classList.toggle("playing")
    pauseResetBtnContainer.style.display = "none"

})