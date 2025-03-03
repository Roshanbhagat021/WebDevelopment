const checkbox =  document.querySelector("input[type='checkbox']");


const mode = localStorage.getItem("Mode")
setTimeout(()=>{
    if(mode == "dark"){
        checkbox.checked = true
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
},100)


checkbox.addEventListener("change",(e)=>{
    setTimeout(()=>{
        if(e.target.checked){
            localStorage.setItem("Mode","dark")
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
          }else{
            localStorage.setItem("Mode","light")
            document.body.style.backgroundColor = "initial"
            document.body.style.color = "initial"
          }   
    },100)
 
})




