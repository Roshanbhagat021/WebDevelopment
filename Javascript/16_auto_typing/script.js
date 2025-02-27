const span  = document.querySelector("span");
const p  = document.querySelector("h3 span");


const wordsList = ["Developer","Coder","Learner","Passionate"]
const wordsList2 = ["Student","Roshan","Brother","Son"]

autoTyping(wordsList,span)
autoTyping(wordsList2,p)

function autoTyping(wordsList,element){
    if(!wordsList.length) return;
    let characterIndex = 0;
    let wordIndex = 0
    let reverseType = false

    function startTyping(){
        setInterval(() => {
            if(element.innerText.length == wordsList[wordIndex].length){
                reverseType = true
            }
            if(!reverseType){
                element.innerText = `${element.innerText}${wordsList[wordIndex][characterIndex]}`;
                characterIndex++;
            }else if(reverseType){
                element.innerText = `${element.innerText.slice(0,-1)}`
                if(element.innerText.length == 0){
                    reverseType = false
                    characterIndex = 0
                    wordIndex++
                    if(wordIndex==wordsList.length){
                        wordIndex=0
                    }
                }
            }
        }, 200);
    }
    startTyping()
    
}
