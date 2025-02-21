const formElement = document.querySelector("#input-form");
const checkBtn = document.querySelector(".check");
const numberInputElement = document.querySelector("#number-input");
const resultElement = document.querySelector(".result");
const startNewGame = document.querySelector(".start-game");
const guessedNumbersElement = document.querySelector(".guessed-numbers");
const lifePointsElement = document.querySelector("#life-point").children;

let gameOver = false;

let guessedArray = [];
let i = 0;
let randomNumber = randomNoBetween1to100();

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  lifePointsElement[i++].classList.remove("live");
  if (gameOver) {
    return;
  }

  //   console.log(randomNumber);
  const userInput = numberInputElement.value;

  guessedArray.push(userInput);
  if (i > 6) {
    numberInputElement.style.cursor = "not-allowed";
    resultElement.innerText = "You Lose";
    guessedNumbersElement.innerText = `Your Guesses: ${guessedArray}`;
    checkBtn.classList.add("notAllowed");
    startNewGame.classList.remove("notAllowed");
    gameOver = true;
  } else {
    resultElement.innerText = compareUserInput(randomNumber, userInput);
    guessedNumbersElement.innerText = `Your Guesses: ${guessedArray}`;
  }
});

function compareUserInput(ComputerRandomNumber, userInput) {
  numberInputElement.value = "";

  if (userInput == ComputerRandomNumber) {
    numberInputElement.style.cursor = "not-allowed";
    checkBtn.classList.add("notAllowed");
    startNewGame.classList.remove("notAllowed");
    gameOver = true;
    return "Yah! You are Right!";
  } else if (userInput > ComputerRandomNumber) {
    return "Too High!";
  } else {
    return "Too Low!";
  }
}

function randomNoBetween1to100() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum;
}

startNewGame.addEventListener("click", () => {
  if (!gameOver) {
    return;
  }
  startNewGame.classList.add("notAllowed");
  checkBtn.classList.remove("notAllowed");
  gameOver = false;
  guessedArray = [];
  numberInputElement.value = "";
  resultElement.innerText = "";
  guessedNumbersElement.innerText = "";
  numberInputElement.style.cursor = "default";
  for (let j = 0; j < 7; j++) {
    lifePointsElement[j].classList.add("live");
  }
  i = 0;
  randomNumber = randomNoBetween1to100();
});
