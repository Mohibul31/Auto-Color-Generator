const color = document.querySelector("#color");
const colorCode = document.querySelector("#colorCode");
const btn = document.querySelector("#btn");

function generat() {
  let ranNum = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  colorCode.innerText = '#' + ranNum;
  color.style.background = '#' + ranNum;
}
