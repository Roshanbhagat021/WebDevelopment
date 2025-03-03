const popupbtn = document.querySelector("button")
const popupOverlay =  document.querySelector(".popup-overlay")
const popup =  document.querySelector(".popup")
const cutPopupBtn = document.querySelector(".cross")
const subscribeBtn = document.querySelector(".input-container span")

popupbtn.addEventListener("click",()=>{
    popupOverlay.classList.add("active")

})

popupOverlay.addEventListener("click",(e)=>{
    if(e.target==popupOverlay || e.target == cutPopupBtn || e.target == subscribeBtn){
        popupOverlay.classList.remove("active")    
    }
})