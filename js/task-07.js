const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
slider.addEventListener("input", (vnt) => {
  text.style.fontSize = vnt.currentTarget.value + "px";
});
