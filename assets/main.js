const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");
const alert = document.getElementById("alert");
function addTask() {
  if (inputbox.value == "") {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);
    let deletebutton = document.createElement("span");
    let check = document.createElement("span");
    check.innerHTML = `<span class="check fa-solid fa-check"></span>`;
    deletebutton.innerHTML = `<i class="trash fa-solid fa-trash"></i>`;
    li.appendChild(check);
    li.appendChild(deletebutton);
  }
  inputbox.value = "";
  savedata();
}
inputbox.addEventListener("keypress" , function(e){
    if (e.key==="Enter") {
        addTask()
    }
})
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.parentElement.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
    savedata();
  }
});
function savedata() {
  localStorage.setItem("data", list.innerHTML);
}
function show() {
  list.innerHTML = localStorage.getItem("data");
}
show();
function clearall() {
  if (list.innerHTML != "") {
    if (window.confirm("are you sure?")) {
      list.innerHTML = "";
      savedata()
    }
  }
  else{
    window.alert("There is nothing to clear")
    savedata()
  }
}
const counter = document.getElementById("counter");

function updateCounter() {
  const value = document.getElementById("list").getElementsByTagName("li").length;
  counter.innerHTML = value;
}

updateCounter(); 
setInterval(updateCounter, 1); 


document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey) && event.key === 'd') {
        clearall(); 
    }
});