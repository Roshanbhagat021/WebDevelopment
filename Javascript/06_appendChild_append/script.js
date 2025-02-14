const container =  document.querySelector(".container")
const card = document.querySelector(".card")


for (let i = 2; i<=100; i++){
    const duplicateCard = card.cloneNode()
    if (i%2){
        duplicateCard.classList.add("even")
    }else{
        duplicateCard.classList.add("odd")
    }
    
    duplicateCard.textContent = i
    container.append(duplicateCard)
}

card.appendChild(container)