const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

let count = 1


addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    // newCard.addEventListener("click",()=>{
    //     newCard.remove()
    // })
    newCard.innerText = count++
    container.append(newCard)
})

container.addEventListener("click",(event)=>{
    if(event.target !== container){
        event.target.remove();

    }
    console.log(event.target);
})