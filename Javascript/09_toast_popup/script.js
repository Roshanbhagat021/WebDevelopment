const showToastBtn = document.querySelector("#show_toast");
const toastContainer = document.querySelector(".toast-container");
const messageInput = document.querySelector("#message");
const toastType = document.querySelector("#type");
const horizontalAlignment = document.querySelector("#horizontal-alignment");
const verticalAlignment = document.querySelector("#vertical-alignment");
const rangeInput = document.querySelector("#range")
const rangeDisplay = document.querySelector("#range-display")


rangeDisplay.innerText = `Duration: ${rangeInput.value} sec`

rangeInput.addEventListener("input",()=>{
    rangeDisplay.innerText = `Duration: ${rangeInput.value} sec`
})

function buildAndDestroyToast(
  type = "warning",
  horizontal_alignment = "left",
  vertical_alignment = "top",
  timing = 5
) {
  const toastDiv = document.createElement("div");
  const cancelBtn = document.createElement("span");
  toastContainer.style.inset = "unset";
  toastContainer.style[vertical_alignment] = 0;
  toastContainer.style[horizontal_alignment] = 0;

  toastDiv.classList.add("toast-element");
  toastDiv.classList.add(type);
  toastDiv.style[horizontal_alignment] = "-100%";

  setTimeout(() => {
    toastDiv.style.transition = "all 1s ease";
    toastDiv.style[horizontal_alignment] = "0%";
  }, 10);
  toastDiv.innerText = messageInput.value || "This is a Toast message!";
  cancelBtn.innerText = " ✕"
  
  toastDiv.appendChild(cancelBtn)
  toastContainer.append(toastDiv);

  
  const delayId = setTimeout(() => {
    toastDiv.style[horizontal_alignment] = "-100%";
    setTimeout(() => {
      toastContainer.removeChild(toastContainer.children[0]);
    }, 500);
  }, `${parseInt(timing)}000`);

  cancelBtn.addEventListener("click",()=>{
    toastDiv.remove()
    clearTimeout(delayId)
  })
}

showToastBtn.addEventListener("click", () => {
  const type = toastType.value;
  const horizontal_alignment = horizontalAlignment.value;
  const vertical_alignment = verticalAlignment.value;
  const timing = rangeInput.value
  buildAndDestroyToast(type, horizontal_alignment, vertical_alignment,timing);
});
