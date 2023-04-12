const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBlur);
function onBlur(evt) {
  const element = evt.currentTarget;
  if (element.value.trim().length === Number(element.dataset.length)) {
    if (element.classList.contains("invalid")) {
      element.classList.remove("invalid");
    }
    element.classList.add("valid");
  } else {
    element.classList.add("invalid");
  }
}
