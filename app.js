const todoInp = document.getElementById("todoInp")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")

let todos = JSON.parse(localStorage.getItem("todos") || "[]")

function showTodos() {
    todoList.innerHTML = ""

    todos.forEach((todo, index) => {
        let li = document.createElement("li")
        li.innerText = todo

        let editBtn = document.createElement("button")
        editBtn.innerText = "Edit"

        editBtn.addEventListener("click", () => {
            let newTodo = prompt("Edit Todo", todo)

            if (newTodo !== null && newTodo !== "") {
                todos[index] = newTodo
                localStorage.setItem("todos", JSON.stringify(todos))
                showTodos()
            }
        })

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"

        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
            showTodos()
        })

        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        todoList.appendChild(li)
    })
}

addBtn.addEventListener("click", () => {
    let todo = todoInp.value

    if (todo !== "") {
        todos.push(todo)

        localStorage.setItem("todos", JSON.stringify(todos))

        todoInp.value = ""

        showTodos()
    }
})

showTodos()
