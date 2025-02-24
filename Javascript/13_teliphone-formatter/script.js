const phoneNumberInputBox = document.querySelector(
  ".teliphone-formatter-input"
);

phoneNumberInputBox.addEventListener("keydown", (e) => {
    console.log(e);
  let acceptedTypes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (!acceptedTypes.includes(e.key)) {
    e.preventDefault();
  }
});

phoneNumberInputBox.addEventListener("input", (e) => {
  if (phoneNumberInputBox.value.length == 4) {
    let allNumber = phoneNumberInputBox.value.split("").every((e) => {
      return e.charCodeAt(0) >= 48 && e.charCodeAt(0) <= 57;
    });
    if (!allNumber) return;

    formatedText = `+(${phoneNumberInputBox.value.slice(0,3)}) - ${phoneNumberInputBox.value.slice(3)}`;
    phoneNumberInputBox.value = formatedText;
    numberOnly = formatedText.slice(2, 5) + formatedText.slice(10);
  }
});
