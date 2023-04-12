const form = document.querySelector(".login-form");
form.addEventListener("submit", taskEightFunction);
function taskEightFunction(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (!email.value || !password.value) {
    window.alert("Please fill in all the fields");
  } else
    console.log("email " + email.value + "\n" + "password " + password.value);
  evt.currentTarget.reset();
}
