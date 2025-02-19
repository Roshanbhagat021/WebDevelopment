const amountInput = document.querySelector("#amount input")
const tipPercentageContainer = document.querySelector("#tip-container")
const tipPercentageBtns = document.querySelectorAll("#tip-container button")
const customTip = document.querySelector("#custome-tip")
const generateBill = document.querySelector("#generate-bil")
const tipAmount = document.querySelector("#tip_amount")
const totalElement = document.querySelector("#total")
const noOfPeople = document.querySelector("#people-count")
const eachPersonBillElement = document.querySelector("#each-person-bill")

let tipPercentage = 0



amountInput.addEventListener("input",()=>{
    tipPercentageContainer.classList.remove("disabledBtn")
})

amountInput.addEventListener("blur",()=>{
    if(amountInput.value == ""){

        tipPercentageContainer.classList.add("disabledBtn")
        return
    }
    tipPercentageContainer.classList.remove("disabledBtn")
})

noOfPeople.addEventListener("input",()=>{
    
    generateBill.style.opacity= 1
    generateBill.style.cursor = "pointer"
})


tipPercentageBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(tipPercentageContainer.classList.value == "disabledBtn"){
            return
        }
        tipPercentageBtns.forEach((el)=>el.classList.remove("selected"))
        btn.classList.toggle("selected")
        tipPercentage = parseInt(btn.innerText)
    })
})

customTip.addEventListener("input",()=>{
    tipPercentageBtns.forEach((el)=>el.classList.remove("selected"))
    tipPercentage = customTip.value
})


generateBill.addEventListener("click",()=>{
   const tip = parseInt((amountInput.value*tipPercentage/100))
   const totalAmount = parseInt(amountInput.value) + tip
   const payAbleAmoutForEachPerson = totalAmount/(noOfPeople.value || 1)
   tipAmount.innerText = tip
   totalElement.innerText = totalAmount
    eachPersonBillElement.innerText = payAbleAmoutForEachPerson
})
