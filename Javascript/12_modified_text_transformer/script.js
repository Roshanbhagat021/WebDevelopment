const inputBox = document.querySelector("#input_box");
const lowerCaseOutput = document.querySelector(".lowerCase");
const upperCaseOutput = document.querySelector(".upperCase");
const pascalCaseOutput = document.querySelector(".pascalCase");
const camelCaseOutput = document.querySelector(".camelCase");
const snakeCaseOutput = document.querySelector(".snakeCase");
const kebabCaseOutput = document.querySelector(".kebabCase");
const trimOutput = document.querySelector(".trim");

const copyBtn = document.querySelectorAll(".copy");
const copiedBtn = document.querySelectorAll(".copied");
const copyContainerList = document.querySelectorAll(".copyContainer");


copyContainerList.forEach((copyContainer) => {
  copyContainer.addEventListener("click", () => {
    const textToCopy = copyContainer.parentElement.nextElementSibling.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        throw new Error("Failed to copy text: " + err);
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
    copyContainer.children[0].classList.toggle("hidden");
    copyContainer.children[1].classList.toggle("hidden");
    setTimeout(() => {
      copyContainer.children[0].classList.toggle("hidden");
      copyContainer.children[1].classList.toggle("hidden");
    }, 5000);
  });
});
inputBox.value = "this is a normal sentence to transform";

function capitalizeWord(str){
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1)
}

function convertToCamelCase(string) {
  let wordsArray = string.toLowerCase().split(" ");
  let camelCase = wordsArray
    .map((word, index) => {
        if(index == 0) return word
        return capitalizeWord(word)
    })
    .join("");
  return camelCase;
}

function convertToPascalCase(string) {
  let words = string.toLowerCase().split(" ");
  let pascalCase = words
    .map((word) => capitalizeWord(word))
    .join("");
  return pascalCase;
}

function convertToSnakeCase(string) {
    return string.replaceAll(" ","_")
}

function convertToKebabCase(string) {
  return  string.replaceAll(" ","-")
}

function updateScreen() {
  lowerCaseOutput.innerText = inputBox.value.trim().toLowerCase()
  upperCaseOutput.innerText = inputBox.value.trim().toUpperCase()
  pascalCaseOutput.innerText = convertToPascalCase(inputBox.value.trim());
  camelCaseOutput.innerText = convertToCamelCase(inputBox.value.trim());
  snakeCaseOutput.innerText = convertToSnakeCase(inputBox.value.trim());
  kebabCaseOutput.innerText = convertToKebabCase(inputBox.value.trim());
  trimOutput.innerText = inputBox.value.split(" ").join("").trim();
}
updateScreen()

inputBox.addEventListener("input", () => updateScreen());

