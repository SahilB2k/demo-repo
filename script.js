const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

function addToDo(item) {
    const listItem = document.createElement("li")
    listItem.innerHTML = `  
    ${
        item
    }
  <i class="fa-solid fa-circle-xmark"></i>`;

  listItem.addEventListener(
    "click",
  function(){
    this.classList.toggle("done");
  }
  )
  toDoBox.appendChild(listItem)

  listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove()
    }
  )
}