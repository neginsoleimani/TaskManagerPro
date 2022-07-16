window.addEventListener("load", () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    const nameInput = document.querySelector("#name")
    const newTodoform = document.querySelector("#new-todo-form")
    const username = localStorage.getItem("username") || ""
    nameInput.value = username

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value)
    })

    newTodoform.addEventListener("submit", e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos))

        e.target.reset();

        DisplayTodos();
    })
    DisplayTodos();
})


function DisplayTodos() {
    const todoList = document.querySelector("#todo-list")
    todoList.innerHTML = ''


    todos.forEach(todo => {
        const todoItem = document.createElement("div")
        todoItem.classList.add("todo-item")
        const label = document.createElement("label")
        const input = document.createElement("input")
        const span = document.createElement("span")
        const content = document.createElement("div")
        const actions = document.createElement("div")
        const editBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")
        input.type = "checkbox"
        input.checked = todo.done
        span.classList.add("bubble")

        if (todo.category == 'personal') {
            span.classList.add("personal")
        } else {
            span.classList.add("business")
        }

        content.classList.add("todo-content")
        actions.classList.add("action")
        editBtn.classList.add("edit")
        deleteBtn.classList.add("delete")

        content.innerHTML = `<input type="text" value = "${todo.content}" readonly/>`

        editBtn.innerHTML = `<i class="bi bi-pencil"></i>`
        deleteBtn.innerHTML = `<i class="bi bi-x-circle"></i>`

        label.appendChild(input)
        label.appendChild(span)
        actions.appendChild(editBtn)
        actions.appendChild(deleteBtn)
        todoItem.appendChild(label)
        todoItem.appendChild(content)
        todoItem.appendChild(actions)
        todoList.appendChild(todoItem)
        
        todoItemBg = document.querySelectorAll(".todo-list .todo-item")
        for (let i = 0; i < todoItemBg.length; i++) {
            todoItemBg[i].style.backgroundColor = localStorage.getItem("todo-item");
        }
    
  
        if (todo.done) {
            todoItem.classList.add("done")
        }

        input.addEventListener("click", e => {
            todo.done = e.target.checked;
            localStorage.setItem("todos", JSON.stringify(todos))

            if (todo.done) {
                todoItem.classList.add("done")
            } else {
                todoItem.classList.remove("done")
            }

            DisplayTodos()
        })

        editBtn.addEventListener('click', e => {
            const input = content.querySelector('input')
            input.removeAttribute("readonly")
            input.focus()

            input.addEventListener("blur", e => {
                input.setAttribute("readonly", true)
                todo.content = e.target.value
                localStorage.setItem("todos", JSON.stringify(todos))
                DisplayTodos()
            })
        })


        deleteBtn.addEventListener("click", e => {
            todos = todos.filter(t => t != todo)
            localStorage.setItem("todos", JSON.stringify(todos))
            DisplayTodos()
        })

    });
}