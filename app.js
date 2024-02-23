document.querySelector("button").addEventListener("click", addTask);

let inputs = document.getElementById("inputField");
let tasks = document.querySelector(".tasksList");

function addTask() {
  if (inputs.value == "") {
    alert("You are better than that !!!");
  } else {
    let newEle = document.createElement("li");
    newEle.innerHTML = `<i class="fa-regular fa-square-check"></i> ${inputs.value}  <i class="fa-solid fa-trash"></i>`;
    tasks.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector(".fa-square-check").addEventListener("click", function() {
      newEle.style.textDecoration= "line-through";
      newEle.style.color = "green";
    })
    newEle.querySelector(".fa-trash").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}


