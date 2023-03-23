// let button = document.querySelector(".button")
// let boxing = document.querySelector(".boxing")

// button.addEventListener("click", function () {
//     boxing.classList.remove("active")

// })
let button = document.querySelector(".button")
let boxing = document.querySelector(".boxing")
let ul = document.querySelector("#myUL")
button.addEventListener("click", function () {
    boxing.classList.toggle("active")

})





let i = document.querySelector(".list-box i")
let lists = document.querySelectorAll("#myUL li")

lists.forEach(li => {
    li.addEventListener("click", function () {
        this.classList.toggle("selected")
        i.classList.add("active")
    })

})
lists.forEach(li => {
    i.addEventListener("click", function () {
        li.style.display = "none"
    })

})


let todoItems = [];
function addTodoItem(newItem) {
    todoItems.push(newItem)

}

function displayTodoItems() {
    let list = document.querySelector("#myUL");
    list.innerHTML = "";

    for (let i = 0; i < todoItems.length; i++) {
        let item = document.createElement("li");
        item.innerText = todoItems[1];
        list.appendChild(item)


    }
}



















