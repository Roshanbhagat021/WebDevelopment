const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")
const completedProgressBar = document.querySelector(".progress-completed")
const progressText = document.querySelector(".progress-text")


let invervalId;

startBtn.addEventListener("click",()=>{
    startBtn.disabled = true
    stopBtn.disabled = false
     invervalId = setInterval(()=>{
        completedProgressBar.style.width = `${parseFloat(completedProgressBar.style.width)+0.2}%`
        progressText.innerText = `${parseInt(completedProgressBar.style.width)}%`
        if(parseInt(completedProgressBar.style.width) == 100){
            clearInterval(invervalId)
        }
    },20)
})


stopBtn.addEventListener("click",()=>{
    startBtn.disabled = false
    stopBtn.disabled = true
    clearInterval(invervalId)
})


resetBtn.addEventListener("click",()=>{
    clearInterval(invervalId)
    startBtn.disabled = false
    stopBtn.disabled = true
    progressText.innerText = `0%`
    completedProgressBar.style.width = "0%"
})