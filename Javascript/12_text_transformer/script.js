const inputBox = document.querySelector("#input_box")
const lowerCaseOutput = document.querySelector(".lowerCase")
const upperCaseOutput = document.querySelector(".upperCase")
const pascalCaseOutput = document.querySelector(".pascalCase")
const camelCaseOutput = document.querySelector(".camelCase")
const snakeCaseOutput = document.querySelector(".snakeCase")
const kebabCaseOutput = document.querySelector(".kebabCase")
const trimOutput = document.querySelector(".trim")


inputBox.value = "this is a normal sentence to transform"
// console.log(inputBox.value.toLowerCase());

inputBox.addEventListener("input",()=>{
    let inputValue = inputBox.value
    if(inputValue==""){
        lowerCaseOutput.innerText = ""
        upperCaseOutput.innerText = ""
        pascalCaseOutput.innerText = ""
        camelCaseOutput.innerText = ""
        snakeCaseOutput.innerText = ""
        kebabCaseOutput.innerText = ""
        trimOutput.innerText = ""
    }
    let lowerCase = inputValue.toLowerCase()
    let upperCase = inputValue.toUpperCase()

    let pascalCase = lowerCase.split(" ").map((el)=>{
        return el[0].toUpperCase().concat(el.slice(1))
    }).join("")

    let snakeCase = inputValue.split(" ").join("_")
    let kebabCase = inputValue.split(" ").join("-")
    let trim = inputValue.split(" ").join("").trim()

    let camelCase = pascalCase[0].toLowerCase().concat(pascalCase.slice(1))
    lowerCaseOutput.innerText = lowerCase
    upperCaseOutput.innerText = upperCase
    pascalCaseOutput.innerText = pascalCase
    camelCaseOutput.innerText = camelCase
    snakeCaseOutput.innerText = snakeCase
    kebabCaseOutput.innerText = kebabCase
    trimOutput.innerText = trim
})