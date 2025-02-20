const amountInput = document.querySelector("#amount input");
const tipPercentageContainer = document.querySelector("#tip-container");
const tipPercentageBtns = document.querySelectorAll("#tip-container button");
const customTip = document.querySelector("#custome-tip");
const generateBill = document.querySelector("#generate-bil");
const tipAmount = document.querySelector("#tip_amount");
const totalElement = document.querySelector("#total");
const noOfPeople = document.querySelector("#people-count");
const eachPersonBillElement = document.querySelector("#each-person-bill");
const resetBtn = document.querySelector("#reset")
let tipPercentage = 0;

noOfPeople.addEventListener("input", () => {
  if (noOfPeople.value == "") {
    return;
  } else if (noOfPeople.value != "" && amountInput.value != "") {
    generateBill.classList.remove("disabledBtn");
    generateBill.style.cursor = "pointer"
  }
});

amountInput.addEventListener("input", () => {
  tipPercentageContainer.classList.remove("disabledBtn");
});

amountInput.addEventListener("blur", () => {
  if (amountInput.value == "") {
    tipPercentageContainer.classList.add("disabledBtn");
    return;
  }
  tipPercentageContainer.classList.remove("disabledBtn");
});



tipPercentageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (tipPercentageContainer.classList.value == "disabledBtn") {
      return;
    }
    tipPercentageBtns.forEach((el) => el.classList.remove("selected"));
    btn.classList.toggle("selected");
    tipPercentage = parseInt(btn.innerText);
  });
});

customTip.addEventListener("input", () => {
  tipPercentageBtns.forEach((el) => el.classList.remove("selected"));
  tipPercentage = customTip.value;
});

generateBill.addEventListener("click", () => {
  if (generateBill.classList.value == "disabledBtn") {
    return;
  }
  const tip = parseInt((amountInput.value * tipPercentage) / 100);
  const totalAmount = parseInt(amountInput.value) + tip;
  const payAbleAmoutForEachPerson = totalAmount / (noOfPeople.value || 1);
  tipAmount.innerText = `₹${tip.toFixed(2)}`;
  totalElement.innerText = `₹${totalAmount.toFixed(2)}`;
  eachPersonBillElement.innerText = `₹${payAbleAmoutForEachPerson.toFixed(2)}`;
  resetBtn.classList.remove("disabledBtn")
});

function reset() {
  tipAmount.innerText = ".."
  totalElement.innerText = ".."
  eachPersonBillElement.innerText = ".."
  tipPercentage = 1
  amountInput.value = ""
  customTip.value = ""
  noOfPeople.value = ""
  tipPercentageContainer.classList.add("disabledBtn");
  generateBill.classList.add("disabledBtn");
  resetBtn.classList.add("disabledBtn")
}

resetBtn.addEventListener("click",()=>{
    if(tipAmount.innerText == ".." && totalElement.innerText == ".." && eachPersonBillElement.innerText  == ".."){
        return
    }
    reset()
})
