const iconContainer = document.querySelectorAll(".icons-container span");
const userIcon = document.querySelector(".user-hand .hand-icon");
const userScoreElement = document.querySelector(".user-hand p");
const computerIcon = document.querySelector(".computer-hand .hand-icon");
const computerScoreElement = document.querySelector(".computer-hand p");
const result = document.querySelector(".result");

let userScore = 0
let compterScore = 0

function getRandomChoice() {
  const array = ["Rock🪨", "Paper📃", "Scissors✂️"];
  return array[Math.floor(Math.random() * array.length)];
}

// Example usage

iconContainer.forEach((el) => {
  el.addEventListener("click", () => {
    userIcon.innerText = "🤜"
    computerIcon.innerText = "🤛"
    userIcon.classList.add("shakeUserHands")
    computerIcon.classList.add("shakeComputerHands")
    setTimeout(()=>{
        compareIcons(el.innerText, getRandomChoice()),1500
    },2000)
    
  });
});

const IconObj = {
  "Rock🪨": "✊",
  "Paper📃": "🖐",
  "Scissors✂️": "✌",
};

function compareIcons(userChoice, computerChoice) {
    userIcon.classList.remove("shakeUserHands")
    computerIcon.classList.remove("shakeComputerHands")
    userIcon.innerText = IconObj[userChoice];
    computerIcon.innerText = IconObj[computerChoice];
  console.log(computerChoice);
  if (userChoice == computerChoice) {
    result.innerText = "Draw";
  } else if(userChoice == "Scissors✂️" ) {
    if (computerChoice == "Paper📃") {
        result.innerText = "You Win!";
        userScoreElement.innerText = `Your Score (${++userScore})`
    }else{
        result.innerText = "You Lose!"
        computerScoreElement.innerText = `Computer Score (${++compterScore})`
    }
  }else if (userChoice == "Paper📃"){
    if(computerChoice == "Rock🪨"){
        result.innerText = "You Win!"
        userScoreElement.innerText = `Your Score (${++userScore})`
    }else{
        result.innerText = "You Lose!"
        computerScoreElement.innerText = `Computer Score (${++compterScore})`
    }
  }else if(userChoice == "Rock🪨"){
    if(computerChoice == "Scissors✂️"){
        result.innerText = "You Win!"
        userScoreElement.innerText = `Your Score (${++userScore})`
    }else{
        result.innerText = "You Lose!"
        computerScoreElement.innerText = `Computer Score (${++compterScore})`
    }
  }
}
